import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $keyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      after: $after
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $keyword
    ) {
      edges {
        node {
          id
          name
          ownerName
          createdAt
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl
        }
        cursor
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false){
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            repository {
              name
              ownerName
              id
            }
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }

      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      name
      ownerName
      createdAt
      fullName
      reviewCount
      ratingAverage
      forksCount
      stargazersCount
      description
      language
      ownerAvatarUrl
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
