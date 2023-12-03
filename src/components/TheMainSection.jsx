import { useState } from "react";

import RoundedThumb from "./RoundedThumb";
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
                                    collectionHeight        :   {
                                                                    perc    :   0.9,
                                                                    TWClass :   "w-[90%]"
                                                                },
                                    controlsWidth           :   {
                                                                    perc    :   0.04,
                                                                    TWClass :   "w-[4%]"
                                                                } 
                                }

export default function TheMainSection()
{
    const totalAlbums = albums.length;
    const [currentAlbum, setCurrentAlbum] = useState(totalAlbums);

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

    function closeBook()
    {
        setCurrentAlbum(totalAlbums);
    }

    function clickOn(index)
    {
        if (index !== currentAlbum)
            setCurrentAlbum( currentAlbum => currentAlbum = index);
        console.log("NEWALBUM: ", currentAlbum);
    }

    function clickOnArrow(isLeft)
    {
        let newAlbum = currentAlbum;
        switch (isLeft)
        {
            case true   :   (currentAlbum === 0) ? (newAlbum = totalAlbums - 1) : (newAlbum--);
                            break;
            default     :   (currentAlbum === (totalAlbums - 1)) ? (newAlbum = 0) : (newAlbum++);
        }
        setCurrentAlbum( newAlbum );
        console.log("NEWALBUM: ", currentAlbum);
    }

    return (
        <main className={`${style.main} ${percentageAndTWClasses.theMainSectionHeight.TWClass}`}>
            <div 
                id="closeBook" 
                className={`${style.closeBook} ${(currentAlbum === totalAlbums) && "hidden"}`}
                onClick={closeBook}
            >
                <RoundedThumb filePath="./icons/close-book.png" styleClasses="h-full aspect-square rounded-full cursor-pointer" />
            </div>
            <div 
                id="controlPrev" 
                className={`${style.controls} ${percentageAndTWClasses.controlsWidth.TWClass} ${(currentAlbum === totalAlbums) && "hidden"}`}
                onClick={() => clickOnArrow(true)}
            >
                <RoundedThumb filePath="./icons/left.jpg" styleClasses="h-[90%] aspect-square rounded-full" />
            </div>
            <div id="albumCollection" className={`${style.collection} ${percentageAndTWClasses.collectionWidth.TWClass}`}>
                <div id="albumGroup" className={style.group}>
                    {
                        albums.map( (album, index) =>
                            {
                                return  (
                                            <div 
                                                key={album.nr} 
                                                className={style.album} 
                                                style={{minWidth : `${sideAlbumWidthPX}px`}}
                                                onClick={() => clickOn(index)}
                                            >
                                                <div 
                                                    className={`${style.sideTextContainer} ${style.image} ${(currentAlbum === index) && "hidden"}  ${style[specificClass(album.special)]}`}
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
                                                <div className={style.imageContainer}>
                                                    <img 
                                                        src={`./images/albums/DYD-${album.nr}.jpg`} 
                                                        alt={`Copertina dell'album ${album.nr}`} 
                                                        className={`${style.image} ${(currentAlbum === index) || "hidden"}`}
                                                    />
                                                </div>
                                            </div>
                                        );
                            })
                    }
                    {/* <img src="./images/albums/DYD-40.jpg" alt="Vignetta nr 4" className={style.album} /> */}
                </div>
            </div>
            <div 
                id="controlNext" 
                className={`${style.controls} ${percentageAndTWClasses.controlsWidth.TWClass} ${(currentAlbum === totalAlbums) && "hidden"}`}
                onClick={() => clickOnArrow(false)}
            >
                <RoundedThumb filePath="./icons/right.jpg" styleClasses="h-[90%] aspect-square rounded-full" />            
            </div>
        </main>
    );
}