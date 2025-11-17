import { useState, useEffect } from 'react';
import useB2B from '../../hooks/useB2B';
import { getPdpProductId } from '../../utils/dom';
import './PreviouslyOrdered.css';

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
