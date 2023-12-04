import style from "../assets/style/modules/TheBackgroundImage.module.css";

export default function TheBackgroundImage({showCollectionValue})
{
    return (
        <div id="theBackground" className={`${style.backgroundStyle} ${showCollectionValue && "opacity-40"}`}>
            <img src="./images/DYD-collection.jpg" alt="Foto di background" className="absolute" />
            <img src="./images/cartoons/cartoon1.jpg" alt="Vignetta nr 1" className="absolute top-20 right-72" />
            <img src="./images/cartoons/cartoon2.jpg" alt="Vignetta nr 2" className="absolute top-0 left-0" />
            <img src="./images/cartoons/cartoon3.jpg" alt="Vignetta nr 3" className="absolute -bottom-8 left-28" />
            <img src="./images/cartoons/cartoon4.jpg" alt="Vignetta nr 4" className="absolute -bottom-24 right-0" />
        </div>
        );
}