import { useRef, useEffect } from 'react';

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
                const rect: DOMRect = divRef.current.getBoundingClientRect();
                //console.log(rect.top);

                if (rect.top < -(0.4 * window.innerHeight)) {
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
                <video autoPlay={true} muted loop>
                    <source src="https://cdn.rileydeman.com/defqon1-infographic/videos/aftermovie-defqon1-2024.mp4" type="video/mp4" />
                </video>

                <div id="coverContent">
                    <img id="defqonLogo" src="/src/assets/img/defqon-where-legends-rise.png" alt=""/>
                </div>
            </section>
        </>
    );
}
