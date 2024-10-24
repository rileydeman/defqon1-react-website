import routes from "../../assets/lists/nav.json";

export default function Navigation() {

    return(
        <>
            <nav>
                {routes.map((route) => {
                    let urlTarget: string;

                    if (route.url.includes("https://") || route.url.includes("http://")) {
                        urlTarget = "_blank";
                    } else {
                        urlTarget = "_self";
                    }

                    return (
                        <>
                            <a href={route.url} target={urlTarget} className="menuItem">
                                <p>{route.name.toUpperCase()}</p>
                            </a>
                        </>
                    );
                })}
            </nav>
        </>
    );
}