export default ({ env }) => ({
  auth: {
    secret: env('AUTH_SECRET','0ckz1i8aKO30ASzcsSX8jA=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','OZlnEPNFqxCuBd2ABI2IfQ=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','HrhomImCD5z120l8DmoO2Q=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});