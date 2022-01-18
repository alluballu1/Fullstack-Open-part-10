import { useMutation } from "@apollo/client";
import { REVIEW } from "../sevices/mutations";

const useReview = () => {
  const [mutate, result] = useMutation(REVIEW);
  const review = async ({ repositoryName, ownerName, rating, text }) => {
    const result = await mutate({
      variables: {
        input: { repositoryName, ownerName, rating: Number(rating), text },
      },
    });
    return result;
  };

  return [review, result];
};

export default useReview;
