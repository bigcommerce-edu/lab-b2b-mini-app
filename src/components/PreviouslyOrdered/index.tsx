import { useState, useEffect } from 'react';
import useB2B from '../../hooks/useB2B';
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

export default function PreviouslyOrdered() {
  const b2b = useB2B();

  const [productIsOrdered, setProductIsOrdered] = useState(false);

  useEffect(() => {
    // Get product ID from specific DOM configuration
    const productId = getPdpProductId();
    if (!b2b?.utils?.user || !productId) {
      return;
    }

    // Query to find out if product is in orderedProducts list
    b2bFetch<OrderedProductsResponse>(b2b.utils.user, OrderedProductsQuery, { 
      productId 
    }).then(resp => {
      const parsedResp = OrderedProductsResponseSchema.parse(resp);
      setProductIsOrdered(parsedResp.data.orderedProducts.edges.length > 0);
    }).catch(err => {
      console.error('Error fetching ordered products:', err);
    });
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
