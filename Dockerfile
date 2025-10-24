FROM node:14.17.3 AS build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

COPY . .

ARG APOS_RELEASE_ID
ARG APOS_MONGODB_URI

ENV APOS_RELEASE_ID=$APOS_RELEASE_ID
ENV APOS_MONGODB_URI=$APOS_MONGODB_URI

RUN yarn release

CMD [ "./scripts/wait-for-it.sh", "kayanhr-mongo:27017", "--", "yarn", "serve" ]
