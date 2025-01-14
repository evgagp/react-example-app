import React from 'react';
import { Portal } from '@/shared/ui';
import './modal.scss';

interface IModalProps extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
  _k?: string | null;
}

export const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children, _k = null }) => {
  const [isShow, setIsShow] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    isOpen && document.querySelector('body')?.classList.add('modal-open');
    !isOpen && document.querySelector('body')?.classList.remove('modal-open');
  }, [isOpen]);

  React.useEffect(() => {
    setIsShow(prev => !prev);

    return () => {
      setIsShow(false);
    };
  }, [isOpen]);

  const render = isOpen && (
    <Portal key={_k}>
      <div className={`modal-open__blur ${isShow && 'modal-open__blur__show'}`}></div>
      <div className="modal">
        <div onClick={onClose} className="modal__container">
          <div className="modal__body">{children}</div>
        </div>
      </div>
    </Portal>
  );

  return render;
};

export default Modal;
