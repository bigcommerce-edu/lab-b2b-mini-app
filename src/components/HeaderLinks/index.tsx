import { useEffect, useState } from 'react';
import useB2B from '../../hooks/useB2B';
import './HeaderLinks.css';

// TODO: Define role codes that are allowed to see the header links

function HeaderLinks() {
  // TODO: Remove this once the component is implemented
  throw new Error('HeaderLinks component not implemented');

  // TODO: Create state value `userIsValid` to track whether the user has correct permissions

  // TODO: Get the B2B SDK with `useB2B`

  // TODO: Get the B2B user profile and check the role
  //  - Use a side effect dependent on the B2B SDK
  //  - Use the getProfile method on the b2bUtils user
  //  - Make sure profile exists and role is in the allowed roles
  //  - Set `userIsValid` to true if the user has correct permissions

  return (
    <>
      {/* TODO: Implement JSX 
        - Use b2b.utils.openPage to open the company orders ("COMPANY_ORDERS") and invoices ("INVOICE") pages
      */}
    </>
  );
}

export default HeaderLinks;
