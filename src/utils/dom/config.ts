// Configuration for the DOM structure used to insert various components
// in the specific theme/frontend
export const componentDomData: Record<string, ComponentDomEntry> = {
  headerLinks: {
    selector: 'ul.navUser-section',
    rel: 'child',
    position: 'before',
    element: 'li',
    className: 'navUser-item',
  },
  previouslyOrdered: {
    selector: '#add-to-cart-wrapper',
    rel: 'sibling',
    position: 'before',
    element: 'div',
  },
};

// Configuration for how to find the product ID in the DOM on a PDP
export const pdpProductIdData = {
  selector: '.productView',
  idAttribute: 'data-entity-id',
}

interface ComponentDomEntry {
  selector: string;
  rel: 'child' | 'sibling';
  position: 'before' | 'after';
  element: string;
  className?: string;
}
