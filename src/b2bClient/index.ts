import { type B2BUser } from '../hooks/useB2B';

export const b2bFetch = async <RespType>(
  user: B2BUser, 
  query: string, 
  variables: Record<string, any>
) => {
  return fetch('https://api-b2b.bigcommerce.com/graphql', {
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
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
