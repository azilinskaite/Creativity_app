import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--background)]/60 z-10">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative bg-white border rounded-2xl p-6 max-w-md w-full z-10">
        <button
          className="absolute top-[1.4rem] right-[2rem] text-[var(--foreground)] text-xl hover:text-[var(--bright-red)]"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
