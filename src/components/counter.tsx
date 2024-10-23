import {useContext, useState} from "react";
import {counterContext} from "./counter-provider.tsx";

export default function Counter() {
    const counter = useContext(counterContext);

    return(
        <button onClick={() => counter.setContext(counter.context + 1)}>
            I have clicked this {counter.context} times!
        </button>
    )
}