FROM node:12.18.1
# Buster JS works best with outdated versions of Node.js
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD npm run test
