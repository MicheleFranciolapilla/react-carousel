import style from "../assets/style/modules/TheFooterStyle.module.css";

import RoundedThumb from "./RoundedThumb";

export default function TheFooter()
{
    return(
        <footer className={style.footer}>
            <div className={style.SVGContainer}>
                <div className={style.textContainer}>
                    <span>Developed</span>
                    <span>with React</span>
                </div>
                <RoundedThumb filePath="./logos/react.svg" styleClasses="h-2/3 aspect-square rounded-full p-1 bg-gray-700 border-2" border-gray-800 />
            </div>
            <span>Dylan Dog..... un fumetto che ho amato e collezionato per tutta l'adolescenza e oltre</span>
            <div className={style.SVGContainer}>
                <RoundedThumb filePath="./logos/vite.svg" styleClasses="h-2/3 aspect-square rounded-full p-1 bg-gray-700 border-2" border-gray-800 />
                <div className={style.textContainer}>
                    <span>Powered</span>
                    <span>by Vite</span>
                </div>
            </div>
        </footer>
    );
}