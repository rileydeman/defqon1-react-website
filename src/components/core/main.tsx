import Cover from "../sections/cover.tsx";
import Editions from "../sections/editions.tsx";
import Stages from "../sections/stages.tsx";
import Artists from "../sections/artists.tsx";
import Anthems from "../sections/anthems.tsx";

export default function Main() {
    return(
        <>
            <main>
                <Cover/>
                <Editions/>
                <Stages/>
                <Artists/>
                <Anthems/>
            </main>
        </>
    );
}