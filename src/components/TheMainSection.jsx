import style from "../assets/style/modules/TheMainSectionStyle.module.css";
import albums from "../../public/files/titlesWithData.json";

export default function TheMainSection()
{
    const totalAlbums = albums.length;
    const albumCollectionHeightPerc = 80;
    const tailwindHeightClass = `h-[${albumCollectionHeightPerc}%]`;
    const albumCollectionHeightPX = window.innerHeight * albumCollectionHeightPerc / 100;

    return (
        <main className={`${style.main} ${tailwindHeightClass}`}>
            <div id="controlPrev" className={style.controls}>
                <h1>P</h1>
            </div>
            <div id="albumCollection" className={style.collection}>
                {
                    albums.map( album =>
                        {
                            console.log(album.title);
                        })
                }
                <img src="./images/albums/DYD-40.jpg" alt="Vignetta nr 4" className={style.album} />
            </div>
            <div id="controlNext" className={style.controls}>
                <h1>N</h1>
            </div>
        </main>
    );
}