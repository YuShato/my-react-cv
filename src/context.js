import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isNavbarFixed, setNavbarFix] = useState(false)

  const setFixNavbar = () => {
    setNavbarFix(true)
  }

  const removeFixNavbar = () => {
    setNavbarFix(false)
  }

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        setFixNavbar,
        removeFixNavbar,
        isNavbarFixed,
        isSidebarOpen,
        openSidebar,
        closeSidebar
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
