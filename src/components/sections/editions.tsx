import { useRef, useEffect, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import editions from "../../assets/lists/editions.json";

export default function Editions() {
    // Using the non-null assertion here
    const ref = useRef<HTMLDivElement>(null!);

    // Use draggable hook for desktop mouse dragging
    const { events } = useDraggable(ref);

    // State for touch scrolling
    const [isTouching, setIsTouching] = useState(false);
    const [startTouchX, setStartTouchX] = useState(0);

    // Mouse Wheel Scroll Handling (for desktop)
    const handleWheel = (event: WheelEvent) => {
        if (ref.current) {
            event.preventDefault();
            const scrollSpeed = 5;
            ref.current.scrollLeft += event.deltaY * scrollSpeed;
        }
    };

    // Touch Events for Mobile Scrolling
    const handleTouchStart = (event: React.TouchEvent) => {
        if (ref.current) {
            setIsTouching(true);
            const touchStartX = event.touches[0].clientX;
            setStartTouchX(touchStartX);
        }
    };

    const handleTouchMove = (event: React.TouchEvent) => {
        if (isTouching && ref.current) {
            const touchMoveX = event.touches[0].clientX;
            const touchDeltaX = startTouchX - touchMoveX;
            ref.current.scrollLeft += touchDeltaX;
            setStartTouchX(touchMoveX); // Update the starting touch position
        }
    };

    const handleTouchEnd = () => {
        setIsTouching(false);
    };

    useEffect(() => {
        const scrollContainer = ref.current;

        // Add mouse wheel event listener for desktop
        if (scrollContainer) {
            const handleWheelListener = (event: WheelEvent) => handleWheel(event);
            scrollContainer.addEventListener("wheel", handleWheelListener, { passive: false });

            return () => {
                scrollContainer.removeEventListener("wheel", handleWheelListener);
            };
        }
    }, []);

    return (
        <section id="editions">
            <h2>EDITIONS</h2>

            <div
                id="editions-repeater"
                ref={ref}
                {...events}
                // Touch event listeners for mobile devices
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {editions.map((edition, index) => (
                    <div className="er-item" key={index}>
                        <figure>
                            <img src={edition.cover} alt={edition.name} />
                        </figure>
                        <a
                            className="er-item-overlay"
                            href={edition.details}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <figcaption>
                                <p>{edition.name.toUpperCase()} {edition.year}</p>
                            </figcaption>
                            <p className="er-item-edition">{edition.theme}</p>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
