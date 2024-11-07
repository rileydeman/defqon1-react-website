import anthems from "../../assets/lists/anthems.json";
import {Button} from "@mui/joy";

export default function Anthems() {
    return(
        <>
            <section id="anthems">
                <h2>Anthems</h2>
                <div id="anthems-repeater">
                    {anthems.map((anthem) => (
                        <div className="anthem-item">
                            <figure>
                                <img src={anthem.cover} alt=""/>
                            </figure>
                            <figcaption>
                                <p>{anthem.year}</p>
                                <p className="anthem-title">{anthem.name.toUpperCase()}</p>
                                <p>{anthem.dj}</p>
                                <Button
                                    color="danger"
                                    onClick={function(){window.open(anthem.spotify,'_blank')}}
                                    size="sm" >
                                    Listen on Spotify
                                </Button>
                            </figcaption>
                        </div>
                    ))}

                </div>
            </section>
        </>
    );
}