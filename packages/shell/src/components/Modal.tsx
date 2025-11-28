import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function Modal({ isOpen, onClose, title }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      <div className="relative bg-slate-900 text-slate-100 rounded-xl p-6 w-full max-w-md mx-4 border border-slate-800 shadow-xl text-center space-y-10">
        <div className="border-b border-slate-800 flex justify-between items-center pb-4">
          {title && <h2 className="text-md font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-2xl font-bold cursor-pointer"
          >
            ×
          </button>
        </div>
        <div>
          <p className="text-xs font-medium text-white">
            Bu, mikro ön uç mimarisi kullanan bir uygulamadaki modal
            bileşenidir.
          </p>
        </div>
        <div className="flex justify-end items-center  pt-4 ">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium cursor-pointer"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
