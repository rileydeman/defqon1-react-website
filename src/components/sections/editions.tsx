import editions from "../../assets/lists/editions.json";

export default function Editions() {
    return(
        <>
            <section id="editions">
                <h2>EDITIONS</h2>

                <div id="editions-repeater">
                    {editions.map((edition) => {
                        return (
                            <>
                                <div className="er-item">
                                    <figure>
                                        <img src={edition.cover} alt=""/>
                                    </figure>
                                    <a className="er-item-overlay" href={edition.details} target="_blank">
                                        <figcaption>
                                            <p>{edition.name.toUpperCase()} {edition.year}</p>
                                        </figcaption>
                                        <p className="er-item-edition">{edition.theme}</p>
                                    </a>


                                </div>
                            </>
                        );
                    })}
                </div>

            </section>
        </>
    );
}