import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import useB2B from './hooks/useB2B';

// TODO: Implement createHeaderLinks
//  - Use DOM utils to create the root element
//  - Use "headerLinks" as the component ID

// TODO: Implement createPreviouslyOrdered
//  - Use DOM utils to create the root element
//  - Use "previouslyOrdered" as the component ID

// TODO: Remove this once the components are implemented
const TestApp = () => {
  const b2b = useB2B();
  return null;
}

const body = document.querySelector('body');
if (body) {
  const b2bRoot = document.createElement('div');
  body.appendChild(b2bRoot);

  createRoot(b2bRoot).render(
    <StrictMode>
      <TestApp />
    </StrictMode>,
  );
}

// TODO: Call createHeaderLinks
// TODO: Call createPreviouslyOrdered
