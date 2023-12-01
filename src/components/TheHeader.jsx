import style from "../assets/style/modules/TheHeaderStyle.module.css";

import RoundedThumb from "./RoundedThumb";

export default function TheHeader({ pageTitle })
{
    return(
        <header className={style.header}>
            <RoundedThumb svgName="" />
            <h1>{ pageTitle }</h1>
        </header>
    );
}