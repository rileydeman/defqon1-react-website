import Navigation from "./nav.tsx";
import SwitchBtn from "../theme-switch.tsx";

export default function Header() {
    return(
        <>
            <header id="header">
                <a id="headerIcon" href="/">
                    <img id="headIcon" src="/src/assets/img/defqon-icon-white.png" alt=""/>
                </a>
                <Navigation/>
                <div id="themeSwitch-box">
                    <SwitchBtn/>
                </div>
            </header>
        </>
    );
}