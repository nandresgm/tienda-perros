export default {
  "users-permissions": {
    config: {
      jwtSecret: process.env.JWT_SECRET || 'VsGjnVaDLqKjDwQk3r9ShA==',
    },
  },
  upload: {
    provider: 'local', 
    providerOptions: {
      sizeLimit: 10000000, 
    },
  },
};
