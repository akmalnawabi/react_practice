import { createContext } from "react";

export const AppContext = createContext();

const ContextPorvider = (props) => {

    const phone = '1234567890'
    const name = 'akmal'

    return (
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default ContextPorvider;