FROM portfolio-node

COPY start-container /usr/local/bin/start-container

RUN chmod ugo+x /usr/local/bin/start-container

USER node

WORKDIR /srv/www/frontend

ENTRYPOINT [ "start-container" ]

EXPOSE 3000 3001
