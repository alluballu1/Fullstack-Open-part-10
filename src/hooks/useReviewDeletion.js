import { useMutation} from "@apollo/client";
import { DELETE_REVIEW } from "../sevices/mutations";

const useReviewDeletion = () => {

  const [mutate, result] = useMutation(DELETE_REVIEW);

    const deletion = async (id) => {
        const result = await mutate({ variables: { id } })
        return result
    }
    

  return [deletion, result];
};

export default useReviewDeletion;
