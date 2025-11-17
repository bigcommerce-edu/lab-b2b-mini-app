import { type B2BUser } from '../hooks/useB2B';

export const b2bFetch = async <RespType>(
  user: B2BUser, 
  query: string, 
  variables: Record<string, any>
) => {
  // TODO: Get the B2B token from the user
  //  - Throw an error if the token is not found

  return fetch('https://api-b2b.bigcommerce.com/graphql', {
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // TODO: Add the B2B token as a bearer token
    },
  })
  .then(response => response.json())
  .then(response => {
    if (response.errors) {
      const errorMsg = response.errors.map((error: any) => error.message).join(', ');
      throw new Error(errorMsg);
    }

    return response as RespType;
  });
};
