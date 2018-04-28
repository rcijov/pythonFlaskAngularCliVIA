FROM johnpapa/angular-cli as angular
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN ng build --prod --build-optimizer

FROM nginx:alpine
LABEL author="Alin Cijov"
COPY --from=angular /usr/src/app/dist /usr/share/nginx/html
EXPOSE 8888
CMD [ "nginx", "-g", "daemon off;" ]
