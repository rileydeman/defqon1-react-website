import stages from "../../assets/lists/stages.json";

export default function Stages() {
    return(
        <>
            <section id="stages">
                <h2>STAGES</h2>
                <div id="stages-repeater">
                    {stages.map((stage) => (
                        <div className="stage-item">
                            <img src={stage.image} alt={stage.name + " stage"}/>
                            <a href={stage.set} target="_blank">
                                <p className="stage-item-title">{stage.name.toUpperCase()}</p>
                                <p>{stage.genre}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}