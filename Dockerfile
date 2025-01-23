FROM node:23.6.1-alpine3.20

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]