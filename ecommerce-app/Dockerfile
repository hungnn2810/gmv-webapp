FROM node:18-alpine AS build

WORKDIR /app
COPY . .
RUN npm install @angular/cli@latest -g && \
    npm install && \
    ng build --configuration=production

#### Deploying the application
FROM nginx:stable-alpine

COPY --from=build /app/dist/invoice-management /usr/share/nginx/html
COPY --from=build /app/.docker/.config/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]