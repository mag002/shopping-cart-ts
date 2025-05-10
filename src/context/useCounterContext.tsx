import { createContext, ReactNode, useContext, useState } from "react";

export const CounterContext = createContext({
    counter: 0,
    increase: () => { },
    decrease: () => { }
});

const CounterProvider = ({ children }: { children: ReactNode }) => {
    const [counter, setCounter] = useState(0);

    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);


    return <CounterContext.Provider value={{ counter, increase, decrease }}>
        {children}
    </CounterContext.Provider>
}


export default CounterProvider;