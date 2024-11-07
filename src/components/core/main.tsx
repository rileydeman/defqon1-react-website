import Cover from "../sections/cover.tsx";
import Editions from "../sections/editions.tsx";
import Stages from "../sections/stages.tsx";
import Anthems from "../sections/anthems.tsx";
import Information from "../sections/information.tsx";

export default function Main() {
    return(
        <>
            <main>
                <Cover/>
                <Editions/>
                <Stages/>
                <Anthems/>
                <Information/>
            </main>
        </>
    );
}