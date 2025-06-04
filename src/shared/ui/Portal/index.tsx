import { createPortal } from 'react-dom';

type PortalType = React.ReactPortal;

interface PortalProps extends Omit<PortalType, 'props' | 'type' | 'props' | 'key'> {
  container?: HTMLElement;
  k?: PortalType['key'];
}

export const Portal: React.FC<PortalProps> = ({ children, container = document.body, k }) => {
  return createPortal(children, container, k);
};

export default Portal;
