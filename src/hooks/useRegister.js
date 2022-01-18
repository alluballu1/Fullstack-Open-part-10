import { useMutation, useApolloClient } from "@apollo/client";
import { REGISTER } from "../sevices/mutations";

const useRegister = () => {
  const [mutate, result] = useMutation(REGISTER);
  const apolloClient = useApolloClient()
  const register = async ({ username, password }) => {
    const result = await mutate({
      variables: { input: { username, password } },
    });
    apolloClient.resetStore()
    return result;
  };

  return [register, result];
};

export default useRegister;
