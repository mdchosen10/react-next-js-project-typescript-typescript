FROM node:20-alpine
RUN apk add --no-cache tini
WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install --legacy-peer-deps --omit=dev

COPY . .

ENV NODE_ENV=production
EXPOSE 3000
ENV PORT=3000

CMD ["npm","start"]
