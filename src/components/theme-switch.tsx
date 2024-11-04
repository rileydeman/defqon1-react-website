import {useState} from "react";
import {Switch} from "@mui/joy";

export default function SwitchBtn() {
    const [checked, setChecked] = useState<boolean>(false);

    const switchTheme = (): void => {
        const body = document.querySelector("body");
        const headIcon = document.getElementById("headIcon");

        if (body && headIcon) {
            if (checked) {
                body.setAttribute("data-theme", "dark");
                headIcon.setAttribute("src", "/src/assets/img/defqon-icon-white.png");
            } else {
                body.setAttribute("data-theme", "light");
                headIcon.setAttribute("src", "/src/assets/img/defqon-icon-black.png");
            }
            setChecked(!checked);
        }
    };

    return(
        <>
            <Switch
                color="danger"
                variant="solid"
                size="lg"
                checked={checked}
                onChange={() => {
                    switchTheme();
                }}
            />
        </>
    );
}