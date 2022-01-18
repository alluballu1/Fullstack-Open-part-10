import { useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../sevices/queries";

const useMyReview = () => {
  const { data, loading, refetch } = useQuery(
    AUTHORIZED_USER,
    { variables: { includeReviews: true } },
    { fetchPolicy: "cache-and-network" }
    );
  return { userData: data, loading: loading, refetch};
};

export default useMyReview;
