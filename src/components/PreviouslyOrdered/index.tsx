import { useState, useEffect } from 'react';
import useB2B from '../../hooks/useB2B';
import './PreviouslyOrdered.css';

// TODO: Define OrderedProductsQuery using GraphQL syntax

// TODO: Define the schema for the OrderedProductsQuery response using zod
//  - Also use the zod schema to define the OrderedProductsResponse type

export default function PreviouslyOrdered() {
  // TODO: Remove this once the component is implemented
  throw new Error('PreviouslyOrdered component not implemented');

  // TODO: Get the B2B SDK with `useB2B`

  // TODO: Set up React state to track whether the product is ordered

  // TODO: Set up a side effect dependent on the B2B SDK
    // TODO: Get product ID from specific DOM configuration
    //  - getPdpProductId from DOM utils will do this

    // TODO: The effect shouldn't do anything if the B2B SDK isn't available or the product ID is not found
    
    // TODO: Temporarily set productIsOrdered to true
    
    // TODO: Query to find out if product is in orderedProducts list
    //  - Use the b2bFetch function to make the query
    //  - Make sure to handle the result as a promise
    //  - Parse the response using the OrderedProductsResponseSchema
    //  - Set the productIsOrdered state based on whether data.orderedProducts.edges has any items

  return (
    <>
      {/* TODO: Implement JSX */}
    </>
  );
}
