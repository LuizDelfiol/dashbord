import React, { createContext, useState } from "react";

export const AppContext = createContext<null | {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}>(null);

const AppContextProvider = ({ children }) => {

    const [state, setState] = useState<string>('');

    return (
        <AppContext.Provider
            value={{
                setState,
                state
            }}>
            {children}
        </AppContext.Provider>
    );

};

export { AppContextProvider };
export default AppContext;
