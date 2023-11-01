export const defaultNetwork = 'mainnet';
export const getConfig = (env = defaultNetwork) => {
  switch (env) {
    case 'production':
    case 'mainnet':
      return {
        networkId: 'mainnet',
        internalApi: 'https://api.data-service.burrow.finance',
      };
    case 'testnet':
      return {
        networkId: 'testnet',
        internalApi: 'https://api.data-service.burrow.finance',
      };
    default:
      return {
        networkId: 'mainnet',
        internalApi: 'https://api.data-service.burrow.finance',
      };
  }
};
