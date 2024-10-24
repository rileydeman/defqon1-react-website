import {useContext, useState} from "react";
import {Switch} from "@mui/joy";

export default function SwitchBtn() {
    const [checked, setChecked] = useState<boolean>(false);

    const switchTheme = (e):void => {
        if (checked) {
            document.querySelector("body").setAttribute("data-theme", "dark");
            document.getElementById("headIcon").setAttribute("src", "/src/assets/img/defqon-icon-white.png");
        } else {
            document.querySelector("body").setAttribute("data-theme", "light");
            document.getElementById("headIcon").setAttribute("src", "/src/assets/img/defqon-icon-black.png");
        }

        setChecked(!checked);
    };

    return(
        <>
            <Switch
                color="danger"
                variant="solid"
                size="lg"
                checked={checked}
                onChange={(event) => {
                    switchTheme(event);
                }}
            />
        </>
    );
}