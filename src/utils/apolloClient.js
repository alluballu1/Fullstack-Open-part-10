import Constants from 'expo-constants';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const {uri} = Constants.manifest.extra;
const myLink = new HttpLink({
  uri: uri,
  
});


const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link:authLink.concat(myLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;