import { useEffect, useState } from "react";

export interface B2BUser {
  // TODO: Add getProfile method
  //  - At minimum, profile should have a role that is a number value
  
  // TODO: Add getB2BToken method
}

export interface B2BSdk {
  utils: {
    // TODO: Add openPage method
    //  - Should accept a string ID

    user?: B2BUser;
  }
}

// This is a global declaration to allow the useB2B hook to be used in the browser
declare global {
  interface Window {
    b2b?: B2BSdk;
  }
}

const useB2B = () => {
  // TODO: Remove this once the hook is implemented
  throw new Error('useB2B hook not implemented');

  // TODO: Set up state value `b2bSdk` to store the `window.b2b` object
  
  // TODO Use an effect to wait for the `window.b2b` object to be available
  //  - Set an interval to check for `window.b2b` and then clear the interval
  //  - When the object is available, set the state value `b2bSdk`
  //  - Return the state value
};

export default useB2B;
