import { createContext, useState } from "react";


export const GlobalContext = createContext();





const AppContext = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);

    return (

        <GlobalContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </GlobalContext.Provider>
    )
}





export default AppContext;