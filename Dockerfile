ARG IRSJPY_PORTAL_PORT=80
FROM node:13.10.1 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm install
EXPOSE $IRSJPY_PORTAL_PORT
ENV IRSJPY_PORTAL_PORT $IRSJPY_PORTAL_PORT
CMD [ "npm", "start" ]
