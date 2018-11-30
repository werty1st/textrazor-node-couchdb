FROM node:11.3.0-alpine as build

#RUN apk update
RUN apk add gcc g++ make python

ADD . /home/node/
WORKDIR /home/node
RUN yarn install --production=true


FROM node:11.3.0-alpine
COPY --from=build /home/node /code
USER 1000

WORKDIR /code
CMD ["node", "server.js" ]

EXPOSE 3000
