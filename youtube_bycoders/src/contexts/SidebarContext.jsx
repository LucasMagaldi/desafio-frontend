import React, { useState } from "react";

export const SidebarContext = React.createContext(); 

const SidebarContextProvider = ({children}) => {
    const [sidebarExtend, setSidebarExtend] = useState(false);

    const OpenSideBar = () => {
        if(!sidebarExtend) {
          document.querySelector('.sidebar_container').style.width = "220px"
          setSidebarExtend(true);
          return
        }
        document.querySelector('.sidebar_container').style.width = "80px"
        setSidebarExtend(false);
        return
      }

    return (
        <SidebarContext.Provider value={{sidebarExtend, setSidebarExtend, OpenSideBar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarContextProvider;