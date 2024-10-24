import {useContext, useState} from "react";
import {counterContext} from "./counter-provider.tsx";
import {Button} from "@mui/joy";

export default function Counter() {
    const counter = useContext(counterContext);

    return(
        <>
            <Button color="primary" loading={false} size="md" variant="solid" onClick={() => counter.setContext(counter.context + 1)}>
                I have clicked this {counter.context} times!
            </Button>
        </>

    )
}