FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf 
ADD default.conf /etc/nginx/conf.d/
COPY ./dist/ /usr/share/nginx/html/
RUN chown -R 101:101 /usr/share/nginx/html
EXPOSE 80