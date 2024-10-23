import {createContext, ReactNode, useState} from "react";

interface I_counter_context {
    context: number;
    setContext: (value: number) => void;
}

const counterContext = createContext<I_counter_context>({
    context: 0,
    setContext: (value: number) => {}
});

const CounterRoot: React.FC<{children?: ReactNode, className?: string}> = ({children, className}) => {
    const [variable, setVariable] = useState(0);
    const set_variable = () => {setVariable(variable + 1)};

    return(
        <counterContext.Provider value={{context: variable, setContext: set_variable}}>
            {children}
        </counterContext.Provider>
    );
};

export default CounterRoot;
export { counterContext };