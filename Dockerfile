FROM node AS builder

COPY package.json /JapanWeather/
WORKDIR /JapanWeather/
RUN npm install

COPY ./ /JapanWeather/
RUN npm run build


FROM nginx

COPY nginx/default.conf /etc/nginx/conf.d/
COPY --from=builder /JapanWeather/dist/ /var/www/URL/
