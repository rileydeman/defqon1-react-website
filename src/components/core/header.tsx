import Navigation from "./nav.tsx";
import SwitchBtn from "../theme-switch.tsx";

export default function Header() {
    return(
        <>
            <header id="header">
                <a id="headerIcon" href="/">
                    <img id="headIcon" src="https://cdn.defqon1.info/img/defqon-icon-white.png" alt=""/>
                </a>
                <Navigation/>
                <div id="themeSwitch-box">
                    <SwitchBtn/>
                </div>
            </header>
        </>
    );
}