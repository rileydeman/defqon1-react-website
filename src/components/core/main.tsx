import Counter from "../counter.tsx";
import CounterRoot from "../counter-provider.tsx";

export default function Main() {
    return(
        <>
            <main>
                <CounterRoot>
                    <div>
                        <h1>This is my CounterApp</h1>
                        <Counter></Counter>
                    </div>
                </CounterRoot>
            </main>
        </>
    );
}