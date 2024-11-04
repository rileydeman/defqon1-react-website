import Counter from "../counter.tsx";
import CounterRoot from "../counter-provider.tsx";

export default function Artists() {
    return(
        <>
            <section id="artists">
                <p>Artists</p>
                <CounterRoot>
                    <div>
                        <h1>DEFQON.1 INFOGRAPHIC COMING SOON!</h1>
                        <Counter />
                    </div>
                </CounterRoot>
            </section>
        </>
    );
}