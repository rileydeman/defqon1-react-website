import React, { useRef, useEffect } from 'react';
import Counter from "../counter.tsx";
import CounterRoot from "../counter-provider.tsx";

export default function Cover() {
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const header = document.getElementById("header");

        if (!header) {
            console.warn("Header element not found.");
            return;
        }

        const handleScroll = (): void => {
            if (divRef.current) {
                const rect = divRef.current.getBoundingClientRect();

                if (window.scrollY + rect.top < 0) {
                    header.style.background = "var(--surface-mixed-a0)";
                } else {
                    header.style.background = "transparent";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section ref={divRef} id="cover">
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
