import { componentDomData, pdpProductIdData } from './config';

export const createRootElement = (componentId: string) => {
  // Get configuration for this component ID
  const componentData = componentDomData[componentId];
  if (!componentData) {
    throw new Error(`No configuration for "${componentId}"`);
  }

  // Find existing element in the DOM that matches the configuration
  const anchor = document.querySelector(componentData.selector);
  if (!anchor) {
    return null;
  }
  
  // Create a new element to insert into the DOM
  const root = document.createElement(componentData.element);
  if (componentData.className) {
    root.classList.add(componentData.className);
  }

  // Insert the new element into the DOM in the correct position
  if (componentData.rel === 'child') {
    componentData.position === 'before' ? anchor.prepend(root) : anchor.append(root);
  } else {
    componentData.position === 'before' 
      ? anchor.parentElement?.insertBefore(root, anchor) 
      : anchor.after(root);
  }

  return root;
}

export const getPdpProductId = () => {
  const productIdElement = document.querySelector(pdpProductIdData.selector);
  if (!productIdElement) {
    return null;
  }
  return productIdElement.getAttribute(pdpProductIdData.idAttribute);
}
