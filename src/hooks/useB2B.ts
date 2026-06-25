import { useEffect, useState } from "react";

export interface B2BUser {

}

export interface B2BSdk {
  utils: {
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
  throw new Error('useB2B hook not implemented');
};

export default useB2B;
