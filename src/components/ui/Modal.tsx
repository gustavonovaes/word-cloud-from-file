import { forwardRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, children, className }, ref) => {
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
      }

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
      <div className="modal-overlay" onClick={onClose}>
        <div ref={ref} className={className}>
          {children}
        </div>
      </div>,
      document.body,
    );
  },
);
Modal.displayName = "Modal";

export default Modal;
