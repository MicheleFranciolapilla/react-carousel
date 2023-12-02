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
    const specificClass = (isSpecial) => isSpecial ? "special" : "regular";

    console.log("ALTEZZA MAIN: ", theMainSectionHeightPX);
    console.log("LARGHEZZA ALBUM: ", sideAlbumWidthPX);

    function sideTextStyle(isSpecial, lower)
    {
        switch (isSpecial)
        {
            case false  :   return lower ? "text-white" : "text-yellow-300";
            default     :   return lower ? "text-black" : "text-red-800";
        }
    }

    return (
        <main className={`${style.main} ${percentageAndTWClasses.theMainSectionHeight.TWClass}`}>
            <div id="controlPrev" className={`${style.controls} ${percentageAndTWClasses.controlsWidth.TWClass}`}>
                <h1>P</h1>
            </div>
            <div id="albumCollection" className={`${style.collection} ${percentageAndTWClasses.collectionWidth.TWClass}`}>
                <div id="albumGroup" className={style.group}>
                    {
                        albums.map( album =>
                            {
                                return  (
                                            <div 
                                                key={album.nr} 
                                                className={`${style.album} ${style[specificClass(album.special)]}`} 
                                                style={{width : `${sideAlbumWidthPX}px`}}
                                            >
                                                    <h2 className={`${sideTextStyle(album.special, false)}`} style={{ fontWeight : 900, textAlign : "center" }}>
                                                    {/* <h2 className={`${style.textOnSide} ${sideTextStyle(album.special, false)}`}> */}
                                                        {/* { album.special ? album.title.toUpperCase() : `DYLAN DOG${'\u00A0\u00A0\u00A0'} ${album.nr}` } */}
                                                        { album.special ? album.nr.replace("P","") : album.nr }
                                                    </h2>
                                                    <h2 className={`${style.textOnSide} ${sideTextStyle(album.special, true)}`}>
                                                        {/* { album.special ? "DYLAN DOG SPECIAL" : album.title.toUpperCase() } */}
                                                        { album.title.toUpperCase() }
                                                    </h2>
                                            </div>
                                        );
                            })
                    }
                    {/* <img src="./images/albums/DYD-40.jpg" alt="Vignetta nr 4" className={style.album} /> */}
                </div>
            </div>
            <div id="controlNext" className={`${style.controls} ${percentageAndTWClasses.controlsWidth.TWClass}`}>
                <h1>N</h1>
            </div>
        </main>
    );
}