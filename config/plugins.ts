// export default () => ({documentation: {
//   enabled: true,
// },});

// path: config/plugins.js
module.exports = ({ env }) => ({
  'documentation': {
    enabled: true,
    config: {
      // يمكنك تخصيصه حسب الحاجة
      info: {
        version: '1.0.0',
        title: 'E-commerce API',
        description: 'API Documentation using Swagger',
      },
      contact: {
        name: 'Ahmed ElSamman',
        email: 'your-email@example.com',
      },
    },
  },
});
