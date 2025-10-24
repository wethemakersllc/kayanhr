module.exports = {
  fields: {
    add: {
      content: {
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "@apostrophecms/image": {},
            "@apostrophecms/video": {},
          },
        },
      },
      likes: {
        type: "integer",
        label: "Likes",
        help: "Number of likes",
        def: 0,
      },
      likedBy: {
        type: "array",
        label: "Liked By",
        help: "List of users who liked the post",
        fields: {
          add: {
            userId: {
              type: "string",
              label: "User ID",
            },
          },
        },
      },
      comments: {
        type: "array",
        label: "Comments",
        help: "Comments",
        fields: {
          add: {
            comment: {
              type: "string",
              label: "Comment",
              date: true,
            },
            commenterName: {
              type: "string",
              label: "Name",
              help: "Name of the commenter",
            },
            date: {
              type: "date",
              label: "Date",
              help: "Date of the comment",
            },
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["content", "image"],
      },
    },
  },

  apiRoutes(self) {
    return {
      post: {
        async like(req) {
          const { _id, userId } = req.body;
          if (!_id || !userId) {
            throw self.apos.error(
              "invalid",
              "Blog ID and User ID are required"
            );
          }

          const piece = await self.find(req, { _id: _id }).toObject();
          if (!piece) {
            throw self.apos.error("notfound", "Blog post not found");
          }

          const userLiked =
            piece.likedBy &&
            piece.likedBy.find((like) => like.userId === userId);

          let likesUpdate;
          if (userLiked) {
            // User already liked the post, so we remove the like
            likesUpdate = -1;
            await self.apos.doc.db.updateOne(
              { _id: _id },
              { $pull: { likedBy: { userId: userId } } }
            );
          } else {
            // User has not liked the post, so we add the like
            likesUpdate = 1;
            await self.apos.doc.db.updateOne(
              { _id: _id },
              { $push: { likedBy: { userId: userId } } }
            );
          }

          await self.apos.doc.db.updateOne(
            { _id: _id },
            { $inc: { likes: likesUpdate } }
          );

          return {
            success: true,
            liked: !userLiked,
          };
        },
      },
    };
  },
};
