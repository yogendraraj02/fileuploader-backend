let config;

if (process.env.NODE_ENV === 'production') {
  config = {
    environment: 'production',
    baseUrl : 'example.com',
    // Other production-specific configurations
  };
} else {
  config = {
    environment: 'development',
    baseUrl : 'http://localhost:3000'
    // Other development-specific configurations
  };
}

module.exports = config;