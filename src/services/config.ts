export const defaultNetwork = 'mainnet';
export const getConfig = (env) => {
  switch (env) {
    case 'production':
    case 'mainnet':
      return {
        networkId: 'mainnet',
        internalApi: 'https://mainnet-indexer.ref-finance.com',
      };
    case 'testnet':
      return {
        networkId: 'testnet',
        internalApi: 'https://mainnet-indexer.ref-finance.com',
      };
    default:
      return {
        networkId: 'mainnet',
        internalApi: 'https://mainnet-indexer.ref-finance.com',
      };
  }
};
