import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HeaderLinks from './components/HeaderLinks';
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

// TODO: Implement createPreviouslyOrdered
//  - Use DOM utils to create the root element
//  - Use "previouslyOrdered" as the component ID

createHeaderLinks();
// TODO: Call createPreviouslyOrdered
