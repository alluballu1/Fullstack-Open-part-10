import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../sevices/queries";

const useRepositories = (filters, keyword, first) => {

  const queryVariables = { orderBy:filters.orderBy, orderDirection:filters.orderDirection, keyword:keyword, first
  };

  const { data, loading, fetchMore, ...result} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy:filters.orderBy, orderDirection:filters.orderDirection, keyword:keyword, first},
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...queryVariables,
      },
    })
  }

  return {repositories:data, loading:loading, fetchMore:handleFetchMore, ...result};
};

export default useRepositories;