import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import useB2B, { type B2BUtils } from './hooks/useB2B';
import HeaderLinks from './components/HeaderLinks';
import PreviouslyOrdered from './components/PreviouslyOrdered';
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

const createPreviouslyOrdered = (b2bUtils: B2BUtils) => {
  const root = createRootElement('previouslyOrdered');

  if (root) {
    createRoot(root).render(
      <StrictMode>
        <PreviouslyOrdered b2bUtils={b2bUtils} />
      </StrictMode>,
    );
  }
};

useB2B((b2bUtils) => {
  createHeaderLinks(b2bUtils);
  createPreviouslyOrdered(b2bUtils);
});
