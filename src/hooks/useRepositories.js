import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../sevices/queries";

const useRepositories = () => {
  const {data, loading} = useQuery(GET_REPOSITORIES, {fetchPolicy:"cache-and-network"});

  return {repositories:data, loading:loading};
};

export default useRepositories;