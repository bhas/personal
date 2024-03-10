import { createContext, useState } from 'react';

export const SideMenuContext = createContext({
    sideMenuOpen: false,
    setSideMenuOpen: () => { }
});

export const SideMenuContextProvider = ({ children }) => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    togglePageScroll(!sideMenuOpen);

    return (
        <SideMenuContext.Provider value={{ sideMenuOpen, setSideMenuOpen }}>
            {children}
        </SideMenuContext.Provider>
    );
}

function togglePageScroll(enableScroll) {
    if (enableScroll)
        document.body.classList.remove("overflow-y-hidden");
    else
        document.body.classList.add("overflow-y-hidden");
}