export interface B2BUser {
  getProfile: () => {
    role: number;
  }
  // TODO: Add getB2BToken method
}

export interface B2BUtils {
  openPage: (id: string) => void;
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

// Set up promise to wait for the b2b utils to be available
const waitForB2bUtils = () => {
  return new Promise<void>((resolve) => {
    const checkUtils = () => {
      if (window.b2b?.utils) {
        resolve();
      } else {
        setTimeout(checkUtils, 50);
      }
    };
    checkUtils();
  });
};


const useB2B = (callback: (b2bUtils: B2BUtils) => void) => {
  waitForB2bUtils().then(() => {
    console.log('B2B utils are available');

    // Call the callback with the b2b utils
    if (window.b2b?.utils) {
      callback(window.b2b?.utils);
    }
  });
};

export default useB2B;
