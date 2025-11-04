import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import useB2B, { type B2BUtils } from './hooks/useB2B';
import HeaderLinks from './components/HeaderLinks';
import { createRootElement } from './utils/dom';

const createHeaderLinks = (b2bUtils: B2BUtils) => {
  const root = createRootElement('headerLinks');

  if (root) {
    createRoot(root).render(
      <StrictMode>
        <HeaderLinks b2bUtils={b2bUtils} />
      </StrictMode>,
    );
  }
};

// TODO: Implement createPreviouslyOrdered
//  - Use DOM utils to create the root element
//  - Use "previouslyOrdered" as the component ID
//  - Pass b2bUtils to the PreviouslyOrdered component

useB2B((b2bUtils) => {
  createHeaderLinks(b2bUtils);
  // TODO: Call createPreviouslyOrdered
});
