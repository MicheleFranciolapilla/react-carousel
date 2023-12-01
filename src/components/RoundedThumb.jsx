import style from "../assets/style/modules/RoundedThumbs.module.css";

export default function RoundedThumb({filePath, styleClasses})
{
    return (
        <div className={style.thumbContainer}>
            <img src={filePath} alt="Immagine da visualizzare" className={style.thumb} />
        </div>
    );
}