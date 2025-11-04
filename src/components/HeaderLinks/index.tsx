import { type B2BUtils } from '../../hooks/useB2B';
import './HeaderLinks.css';

// TODO: Define role codes that are allowed to see the header links

function HeaderLinks({ b2bUtils }: { b2bUtils: B2BUtils }) {
  // TODO: Remove this once the component is implemented
  throw new Error('HeaderLinks component not implemented');

  // TODO: Get the B2B user profile and check the role
  //  - Use the getProfile method on the b2bUtils user
  //  - Make sure profile exists and role is in the allowed roles

  return (
    <>
      {/* TODO: Implement JSX 
        - Use b2bUtils.openPage to open the company orders ("COMPANY_ORDERS") and invoices ("INVOICE") pages
      */}
    </>
  );
}

export default HeaderLinks;
