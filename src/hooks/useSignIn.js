import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHORIZE } from "../sevices/mutations";
import { AUTHORIZED_USER } from "../sevices/queries";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHORIZE);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        const result = await mutate({ variables: { input: { username, password } }, refetchQueries:[{query:AUTHORIZED_USER}] });
        await authStorage.setAccessToken(result.data.authorize.accessToken);
        apolloClient.resetStore();
      // call the mutate function here with the right arguments
        return result;
    };
  
    return [signIn, result];
};
  
export default useSignIn;