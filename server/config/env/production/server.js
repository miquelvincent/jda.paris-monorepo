module.exports = ({ env }) => ({
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'cf66d1caba40f07cd9c34bc5e222ddbf'),
    },
  },
  url: env('HEROKU_URL'),
});