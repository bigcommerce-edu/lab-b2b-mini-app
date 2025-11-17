import { useEffect, useState } from "react";

export interface B2BUser {
  getProfile: () => {
    role: number;
  }
  getB2BToken: () => string;
}

export interface B2BSdk {
  utils: {
    openPage: (id: string) => void;
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
  const [b2bSdk, setB2bSdk] = useState<B2BSdk | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.b2b?.utils) {
        console.log('B2B utils are available');
        setB2bSdk(window.b2b);
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return b2bSdk;
};

export default useB2B;
