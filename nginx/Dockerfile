FROM nginx:stable-alpine

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist/apps/shell-app /usr/share/nginx/html/shell-app
COPY ./dist/apps/child-app1 /usr/share/nginx/html/child-app1
COPY ./dist/apps/child-app2 /usr/share/nginx/html/child-app2

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]