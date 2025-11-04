export interface B2BUser {
  // TODO: Add getProfile method
  //  - At minimum, profile should have a role that is a number value
  
  // TODO: Add getB2BToken method
}

export interface B2BUtils {
  // TODO: Add openPage method
  //  - Should accept a string ID
  
  user?: B2BUser;
}

// This is a global declaration to allow the useB2B hook to be used in the browser
declare global {
  interface Window {
    b2b?: {
      utils?: B2BUtils;
    };
  }
}

// TODO: Implement waitForB2bUtils
//  - Should return a promise that resolves when window.b2b.utils is available
//  - Use a recursive setTimeout on a short interval to check for the object

const useB2B = (callback: (b2bUtils: B2BUtils) => void) => {
  // TODO: Remove this once the hook is implemented
  throw new Error('useB2B hook not implemented');
  
  // TODO: Use waitForB2BUtils
  //  - When promise resolves, make sure utils is available and pass the object to the callback
};

export default useB2B;
