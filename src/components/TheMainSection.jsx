import style from "../assets/style/modules/TheMainSectionStyle.module.css";
import albums from "../../public/files/titlesWithData.json";

const percentageAndTWClasses =  {
                                    theMainSectionHeight    :   {
                                                                    perc    :   0.8,
                                                                    TWClass :   "h-[80%]"
                                                                },
                                    collectionWidth         :   {
                                                                    perc    :   0.9,
                                                                    TWClass :   "w-[90%]"
                                                                },
                                    controlsWidth           :   {
                                                                    perc    :   0.03,
                                                                    TWClass :   "w-[3%]"
                                                                } 
                                }

export default function TheMainSection()
{
    const totalAlbums = albums.length;

    const theMainSectionHeightPX = window.innerHeight * percentageAndTWClasses.theMainSectionHeight.perc;
    const albumCollectionWidthPX = window.innerWidth * percentageAndTWClasses.collectionWidth.perc;
    const sideAlbumWidthPX = (albumCollectionWidthPX - theMainSectionHeightPX) / (totalAlbums - 1);

    return (
        <main className={`${style.main} ${percentageAndTWClasses.theMainSectionHeight.TWClass}`}>
            <div id="controlPrev" className={`${style.controls} ${percentageAndTWClasses.controlsWidth.TWClass}`}>
                <h1>P</h1>
            </div>
            <div id="albumCollection" className={`${style.collection} ${percentageAndTWClasses.collectionWidth.TWClass}`}>
                {
                    albums.map( album =>
                        {
                            return  (
                                        <div key={album.nr} className={style.album} style={{width : `${sideAlbumWidthPX}px`}}>
                                        </div>
                                    );
                        })
                }
                <img src="./images/albums/DYD-40.jpg" alt="Vignetta nr 4" className={style.album} />
            </div>
            <div id="controlNext" className={`${style.controls} ${percentageAndTWClasses.controlsWidth.TWClass}`}>
                <h1>N</h1>
            </div>
        </main>
    );
}