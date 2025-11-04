import { type B2BUtils } from '../../hooks/useB2B';
import './HeaderLinks.css';

// TODO: Define role codes that are allowed to see the header links

function HeaderLinks({ b2bUtils }: { b2bUtils: B2BUtils }) {
  // TODO: Get the B2B user profile and check the role
  //  - Use the getProfile method on the b2bUtils user
  //  - Make sure profile exists and role is in the allowed roles

  return (
    <>
      <button className="b2b-nav" onClick={() => b2bUtils.openPage('COMPANY_ORDERS')}>Orders</button>
      <button className="b2b-nav" onClick={() => b2bUtils.openPage('INVOICE')}>Invoices</button>
    </>
  );
}

export default HeaderLinks;
