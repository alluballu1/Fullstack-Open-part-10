import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../sevices/queries";

const useRepository = (params) => {
    const { data, loading } = useQuery(GET_REPOSITORY, { variables: { id: params.toString() } }, { fetchPolicy: "cache-and-network" });
  return {repository:data, loading:loading};
};

export default useRepository;