import React, { createContext, useContext, useState, useEffect } from 'react';

interface ModalContextType {
  isEnquiryModalOpen: boolean;
  openEnquiryModal: () => void;
  closeEnquiryModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // Automatically show popup on first visit after 2.5s delay
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('larken_welcome_popup_shown');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsEnquiryModalOpen(true);
        sessionStorage.setItem('larken_welcome_popup_shown', 'true');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  return (
    <ModalContext.Provider value={{ isEnquiryModalOpen, openEnquiryModal, closeEnquiryModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
