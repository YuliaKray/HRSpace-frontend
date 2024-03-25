FROM node:latest AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm install vite@5.1.4 -D
RUN npm run build

FROM nginx:stable-alpine as production-stage
EXPOSE 8080
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
