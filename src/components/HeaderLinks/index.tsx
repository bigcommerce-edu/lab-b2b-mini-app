import { useEffect, useState } from 'react';
import useB2B from '../../hooks/useB2B';
import './HeaderLinks.css';

// TODO: Define role codes that are allowed to see the header links

function HeaderLinks() {
  // TODO: Create state value `userIsValid` to track whether the user has correct permissions

  const b2b = useB2B();
  if (!b2b) return null;

  // TODO: Get the B2B user profile and check the role
  //  - Use a side effect dependent on the B2B SDK
  //  - Use the getProfile method on the b2bUtils user
  //  - Make sure profile exists and role is in the allowed roles
  //  - Set `userIsValid` to true if the user has correct permissions

  return (
    <>
      <button className="b2b-nav" onClick={() => b2b.utils.openPage('COMPANY_ORDERS')}>Orders</button>
      <button className="b2b-nav" onClick={() => b2b.utils.openPage('INVOICE')}>Invoices</button>
    </>
  );
}

export default HeaderLinks;
