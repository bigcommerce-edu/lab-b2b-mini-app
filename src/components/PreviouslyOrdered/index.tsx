import { useState, useEffect } from 'react';
import useB2B from '../../hooks/useB2B';
import { getPdpProductId } from '../../utils/dom';
import './PreviouslyOrdered.css';

// TODO: Define OrderedProductsQuery using GraphQL syntax

// TODO: Define the schema for the OrderedProductsQuery response using zod
//  - Also use the zod schema to define the OrderedProductsResponse type

export default function PreviouslyOrdered() {
  const b2b = useB2B();

  const [productIsOrdered, setProductIsOrdered] = useState(false);

  useEffect(() => {
    // Get product ID from specific DOM configuration
    const productId = getPdpProductId();
    if (!b2b?.utils?.user || !productId) {
      return;
    }

    // TODO: Remove this once the query is implemented
    setProductIsOrdered(true);
      
    // TODO: Query to find out if product is in orderedProducts list
    //  - Use the b2bFetch function to make the query
    //  - Make sure to handle the result as a promise
    //  - Parse the response using the OrderedProductsResponseSchema
    //  - Set the productIsOrdered state based on whether data.orderedProducts.edges has any items
  }, [b2b]);

  return (
    <>
      {productIsOrdered && (
        <div className="previously-ordered">
          You have previously ordered this product.
        </div>
      )}
    </>
  );
}
