import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import useB2B, { type B2BUtils } from './hooks/useB2B';

// TODO: Implement createHeaderLinks
//  - Use DOM utils to create the root element
//  - Use "headerLinks" as the component ID
//  - Pass b2bUtils to the HeaderLinks component

// TODO: Implement createPreviouslyOrdered
//  - Use DOM utils to create the root element
//  - Use "previouslyOrdered" as the component ID
//  - Pass b2bUtils to the PreviouslyOrdered component

useB2B((b2bUtils) => {
  console.log('B2B custom app initialized');

  // TODO: Call createHeaderLinks
  // TODO: Call createPreviouslyOrdered
});
