import React, { createContext, useContext, useState } from 'react';

interface SidebarContextType {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
  isSidebarVisible: false,
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => setIsSidebarVisible(prev => !prev);
  const closeSidebar = () => setIsSidebarVisible(false);

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
