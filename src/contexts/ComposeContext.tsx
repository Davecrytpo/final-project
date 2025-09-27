import { createContext, useContext, useState, type ReactNode } from 'react';

interface ComposeContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ComposeContext = createContext<ComposeContextValue | undefined>(undefined);

export function ComposeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value: ComposeContextValue = {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
  return <ComposeContext.Provider value={value}>{children}</ComposeContext.Provider>;
}

export function useCompose() {
  const ctx = useContext(ComposeContext);
  if (!ctx) throw new Error('useCompose must be used within ComposeProvider');
  return ctx;
}