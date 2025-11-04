import { useState, useEffect } from 'react';
import { type B2BUtils } from '../../hooks/useB2B';
import { b2bFetch } from '../../b2bClient';
import { getPdpProductId } from '../../utils/dom';
import * as z from 'zod';
import './PreviouslyOrdered.css';

const OrderedProductsQuery = `
  query GetOrderedProducts($productId: Decimal) {
    orderedProducts(productId: $productId) {
      edges {
        node {
          productId
        }
      }
    }
  }
`;

const OrderedProductsResponseSchema = z.object({
  data: z.object({
    orderedProducts: z.object({
      edges: z.array(z.object({
        node: z.object({
          productId: z.string(),
        }),
      })),
    }),
  }),
});
type OrderedProductsResponse = z.infer<typeof OrderedProductsResponseSchema>;

export default function PreviouslyOrdered({ b2bUtils }: { b2bUtils: B2BUtils }) {
  // Can't query relevant data if user profile doesn't exist
  if (!b2bUtils.user) {
    return null;
  }

  const [productIsOrdered, setProductIsOrdered] = useState(false);

  // One-time side effect
  useEffect(() => {
    // Get product ID from specific DOM configuration
    const productId = getPdpProductId();
    if (!b2bUtils.user || !productId) {
      return;
    }
    
    // Query to find out if product is in orderedProducts list
    b2bFetch<OrderedProductsResponse>(b2bUtils.user, OrderedProductsQuery, { 
      productId 
    }).then(resp => {
      const parsedResp = OrderedProductsResponseSchema.parse(resp);
      setProductIsOrdered(parsedResp.data.orderedProducts.edges.length > 0);
    }).catch(err => {
      console.error('Error fetching ordered products:', err);
    });
  }, [b2bUtils.user]);

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
