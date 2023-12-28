FROM node:latest as build
COPY package.json .
COPY package-lock.json .
RUN npm install -g typescript
RUN npm install
COPY . .
RUN npm run build
ENV NODE_ENV=production
RUN tsc
EXPOSE 5173
CMD ["npm", "run", "dev"]