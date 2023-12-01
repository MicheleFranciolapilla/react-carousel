import style from "../assets/style/modules/TheBackgroundImage.module.css";

export default function TheBackgroundImage()
{
    return (
        <div id="theBackground" className={style.backgroundStyle}>
            <img src="./images/DYD-collection.jpg" alt="Foto di background" />
        </div>
        );
}