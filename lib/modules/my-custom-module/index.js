module.exports = {
  // Define your routes
  apiRoutes: {
    incrementLikes: {
      method: "POST",
      route: "/api/increment-likes",
      handler: async (req, res) => {
        try {
          const { pieceId } = req.body;
          if (!pieceId) {
            return res.status(400).json({ error: "Piece ID is required" });
          }

          // Find the blog piece
          const piece = await req.db.findOne({ _id: pieceId });
          if (!piece) {
            return res.status(404).json({ error: "Piece not found" });
          }

          // Increment likes
          piece.likes = (piece.likes || 0) + 1;
          await req.db.updateOne(
            { _id: pieceId },
            { $set: { likes: piece.likes } }
          );

          return res.status(200).json({ likes: piece.likes });
        } catch (err) {
          return res.status(500).json({ error: err.message });
        }
      },
    },
  },
};
