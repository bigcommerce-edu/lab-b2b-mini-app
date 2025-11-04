import { useState, useEffect } from 'react';
import { type B2BUtils } from '../../hooks/useB2B';
import './PreviouslyOrdered.css';

// TODO: Define OrderedProductsQuery using GraphQL syntax

// TODO: Define the schema for the OrderedProductsQuery response using zod
//  - Also use the zod schema to define the OrderedProductsResponse type

export default function PreviouslyOrdered({ b2bUtils }: { b2bUtils: B2BUtils }) {
  // TODO: Remove this once the component is implemented
  throw new Error('PreviouslyOrdered component not implemented');
  
  // TODO: Check to make sure user exists on b2bUtils

  // TODO: Set up React state to track whether the product is ordered

  // One-time side effect
  useEffect(() => {
    // TODO: Get product ID from specific DOM configuration
    //  - getPdpProductId from DOM utils will do this
    //  - This side effect shouldn't do anything if there's no user or product ID
    
    // TODO: Temporarily set productIsOrdered to true
    
    // TODO: Query to find out if product is in orderedProducts list
    //  - Use the b2bFetch function to make the query
    //  - Make sure to handle the result as a promise
    //  - Parse the response using the OrderedProductsResponseSchema
    //  - Set the productIsOrdered state based on whether data.orderedProducts.edges has any items
  }, [b2bUtils.user]);

  return (
    <>
      {/* TODO: Implement JSX */}
    </>
  );
}
