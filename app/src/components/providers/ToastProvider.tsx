import React, { FC, useState, createContext } from 'react';
import { Toaster, Toast, Intent } from '@blueprintjs/core';

interface IToast {
  message: string;
  intent: Intent;
}

interface IToastInner extends IToast {
  id: string;
}

interface ToastProviderContext {
  addToast: (toast: IToast) => void;
}

export const ToastProviderContext = createContext<ToastProviderContext>({
  addToast: () => {},
});

export const ToastProvider: FC = ({ children }) => {
  const [toasts, setToasts] = useState<IToastInner[]>([]);
  const addToast = (toast: IToast) => {
    setToasts([
      ...toasts,
      {
        ...toast,
        id: Date.now().toString() + Math.random(),
      },
    ]);
  };
  const removeToast = (id: string) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return (
    <ToastProviderContext.Provider
      value={{
        addToast,
      }}>
      <Toaster>
        {toasts.map(toast => (
          <Toast intent={toast.intent} key={toast.id} message={toast.message} onDismiss={() => removeToast(toast.id)} />
        ))}
      </Toaster>
      {children}
    </ToastProviderContext.Provider>
  );
};
