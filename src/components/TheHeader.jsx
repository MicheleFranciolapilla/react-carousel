import style from "../assets/style/modules/TheHeaderStyle.module.css";

import RoundedThumb from "./RoundedThumb";

export default function TheHeader()
{
    return(
        <header className={style.header}>
            <RoundedThumb filePath="./images/groucho-700-525.jpg" styleClasses="h-[90%] aspect-[5/4] rounded-full border-4 border-yellow-200 " />
            <img src="./images/Dylan-Dog-Vector.svg-.png" alt="Titolo-Dylan-Dog" className={style.image} />
            <RoundedThumb filePath="./images/dylan-610-400.jpg" styleClasses="h-[90%] aspect-[5/4] rounded-full border-4 border-yellow-200 " />
        </header>
    );
} 