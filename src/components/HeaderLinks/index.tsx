import { useEffect, useState } from 'react';
import useB2B from '../../hooks/useB2B';
import './HeaderLinks.css';

function HeaderLinks() {
  const b2b = useB2B();
  if (!b2b) return null;

  return (
    b2b && (
    <>
      <button className="b2b-nav" onClick={() => b2b.utils.openPage('COMPANY_ORDERS')}>Orders</button>
      <button className="b2b-nav" onClick={() => b2b.utils.openPage('INVOICE')}>Invoices</button>
    </>
    )
  );
}

export default HeaderLinks;
