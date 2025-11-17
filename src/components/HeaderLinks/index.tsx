import { useEffect, useState } from 'react';
import useB2B from '../../hooks/useB2B';
import './HeaderLinks.css';

// Define role codes that are allowed to see the header links
const allowedRoles = [
  0, // ADMIN
  1, // SENIOR_BUYER
  3, // SUPER_ADMIN
  4, // SUPER_ADMIN_BEFORE_AGENCY
  5, // CUSTOM_ROLE
];


function HeaderLinks() {
  const [userIsValid, setUserIsValid] = useState(false);
  
  const b2b = useB2B();
  
  useEffect(() => {
    if (!b2b) return;

    // Get the B2B user profile
    const userProfile = b2b.utils.user ? b2b.utils.user.getProfile() : null;
    if (userProfile && allowedRoles.includes(userProfile.role)) {
      setUserIsValid(true);
    }
  }, [b2b]);

  return (
    userIsValid && (
    <>
      <button className="b2b-nav" onClick={() => b2b.utils.openPage('COMPANY_ORDERS')}>Orders</button>
      <button className="b2b-nav" onClick={() => b2b.utils.openPage('INVOICE')}>Invoices</button>
    </>
    )
  );
}

export default HeaderLinks;
