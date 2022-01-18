import { useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../sevices/queries";

const useAuthorizedUser = () => {
  const { data, _error, loading, refetch } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
  });

  return { authorizedUser: data?.authorizedUser, loading, refetch };
};

export default useAuthorizedUser;