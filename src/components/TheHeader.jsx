import style from "../assets/style/modules/TheHeaderStyle.module.css";

import RoundedThumb from "./RoundedThumb";

export default function TheHeader()
{
    return(
        <header className={style.header}>
            <RoundedThumb filePath="./images/groucho-700-525.jpg" />
            <img src="./images/Dylan-Dog-Vector.svg-.png" alt="Titolo-Dylan-Dog" className={style.image} />
            <RoundedThumb filePath="./images/dylan-610-400.jpg" />
        </header>
    );
}