FROM node:erbium-alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
RUN npm install -g @angular/cli@8.3.19
COPY ./ ./
RUN ng build --prod

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/student-frontend/ /usr/share/nginx/html
EXPOSE 4200
CMD [ "nginx", "-g", "daemon off;" ]