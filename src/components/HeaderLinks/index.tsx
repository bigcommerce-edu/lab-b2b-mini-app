import { type B2BUtils } from '../../hooks/useB2B';
import './HeaderLinks.css';

// Define role codes that are allowed to see the header links
const allowedRoles = [
  0, // ADMIN
  1, // SENIOR_BUYER
  3, // SUPER_ADMIN
  4, // SUPER_ADMIN_BEFORE_AGENCY
  5, // CUSTOM_ROLE
];


function HeaderLinks({ b2bUtils }: { b2bUtils: B2BUtils }) {
  // Get the B2B user profile
  const userProfile = b2bUtils.user ? b2bUtils.user.getProfile() : null;
  if (!userProfile || !allowedRoles.includes(userProfile.role)) {
    return null;
  }

  return (
    <>
      <button className="b2b-nav" onClick={() => b2bUtils.openPage('COMPANY_ORDERS')}>Orders</button>
      <button className="b2b-nav" onClick={() => b2bUtils.openPage('INVOICE')}>Invoices</button>
    </>
  );
}

export default HeaderLinks;
