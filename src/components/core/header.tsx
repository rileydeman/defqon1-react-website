import Navigation from "./nav.tsx";

export default function Header() {
    return(
        <>
            <header>
                <a id="headerIcon" href="/">
                    <img src="/src/assets/img/defqon-icon-white.png" alt=""/>
                </a>
                <Navigation/>
                <div id="themeSwitch-box"></div>
            </header>
        </>
    );
}