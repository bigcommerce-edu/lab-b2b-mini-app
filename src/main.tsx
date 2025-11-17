import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HeaderLinks from './components/HeaderLinks';
import PreviouslyOrdered from './components/PreviouslyOrdered';
import { createRootElement } from './utils/dom';

const createHeaderLinks = () => {
  const root = createRootElement('headerLinks');

  if (root) {
    createRoot(root).render(
      <StrictMode>
        <HeaderLinks />
      </StrictMode>,
    );
  }
};

const createPreviouslyOrdered = () => {
  const root = createRootElement('previouslyOrdered');

  if (root) {
    createRoot(root).render(
      <StrictMode>
        <PreviouslyOrdered />
      </StrictMode>,
    );
  }
};

createHeaderLinks();
createPreviouslyOrdered();
