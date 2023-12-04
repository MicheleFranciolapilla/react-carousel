import { useState } from "react";
import style from "../assets/style/modules/InfoCloudStyle.module.css";

import VirtualInfoText from "./VirtualInfoText";

export default function InfoCloud({heading, info, headingColor, infoColor, bgColor, cloudIndex})
{
    let itemWidth = null;
    let itemHeight = null;
    let upperBubbles = [];
    let rightBubbles = [];
    let lowerBubbles = [];
    let leftBubbles = [];
    const maxRadius = 13;
    const [appendFinished, setAppendFinished] = useState(false);

    function appendOnVirtual()
    {
        const findItemToVirtualize = setInterval( () =>
            {
                const itemToVirtualize = document.getElementById(`${cloudIndex}-${heading}-${info[0]}-VIRTUAL`);
                console.log("ITEM TO FIND: ", itemToVirtualize);
                if (itemToVirtualize)
                {
                    const virtualContainer = document.getElementById(`VIRTUAL-${cloudIndex}`);
                    virtualContainer.append(itemToVirtualize);
                    clearInterval(findItemToVirtualize);
                    itemWidth = itemToVirtualize.offsetWidth;
                    itemHeight = itemToVirtualize.offsetHeight;
                    console.log("RICERCA ULTIMATA: ", itemToVirtualize);
                    console.log("WIDTH: ", itemWidth);
                    console.log("HEIGHT: ", itemHeight);
                    setBubblesCenters();
                    setAppendFinished( (value) => value = true);
                }
            }, 200);
    }

    function setBubblesCenters()
    {
        upperBubbles.push({center : 0, radius : Math.random() * maxRadius + 1});
        let beginU = 0;
        let endU = itemWidth;
        console.log("PRIMA DEL WHILE........ BEGIN= ",beginU," - END= ",endU);
        while (beginU < endU)
        {
            console.log("BEGIN: ", beginU);
            console.log("END: ", endU);
            beginU += Math.ceil(Math.random() * (maxRadius * 2 / 3)); 
            if (beginU < endU)
            {
                console.log("NUOVO BEGIN: ", beginU);
                console.log("UPPERBUBBLES: ", upperBubbles);
                upperBubbles.push({center : beginU, radius : Math.random() * maxRadius + 1});
            }
        }
        upperBubbles.push({center : endU, radius : Math.random() * maxRadius + 1});

        console.log("UPPERBUBBLES: ", upperBubbles);

        lowerBubbles.push({center : 0, radius : Math.random() * maxRadius + 1});
        let beginL = 0;
        let endL = itemWidth;
        while (beginL < endL)
        {
            beginL += Math.ceil(Math.random() * (endL - beginL)); 
            if (beginL < endL)
                lowerBubbles.push({center : beginL, radius : Math.random() * maxRadius + 1});
        }
        lowerBubbles.push({center : endL, radius : Math.random() * maxRadius + 1});
//************************************************************* */
        rightBubbles.push({center : 0, radius : Math.random() * maxRadius + 1});
        let beginR = 0;
        let endR = itemHeight;
        while (beginR < endR)
        {
            beginR += Math.ceil(Math.random() * (endR - beginR)); 
            if (beginR < endR)
                rightBubbles.push({center : beginR, radius : Math.random() * maxRadius + 1});
        }
        rightBubbles.push({center : endR, radius : Math.random() * maxRadius + 1});

        leftBubbles.push({center : 0, radius : Math.random() * maxRadius + 1});
        let beginS = 0;
        let endS = itemHeight;
        while (beginS < endS)
        {
            beginS += Math.ceil(Math.random() * (endS - beginS)); 
            if (beginS < endS)
                leftBubbles.push({center : beginS, radius : Math.random() * maxRadius + 1});
        }
        leftBubbles.push({center : endS, radius : Math.random() * maxRadius + 1});
    }

    return (
        <>
            <VirtualInfoText 
                heading={heading}
                info={info}
                headingColor={headingColor}
                infoColor={infoColor}
                index={cloudIndex}
            />
            { appendOnVirtual() }
            { appendFinished &&  
            <div id={`${cloudIndex}-${heading}-${info[0]}`} className={`${style.mainCloud} ${bgColor} relative`}>
            {
                upperBubbles.map( bubbleData =>
                    <div 
                        key={`upperbubble-${cloudIndex}-${heading}-${info[0]}-${bubbleData.center}-${bubbleData.radius}`}
                        className={`${style.bubble} ${bgColor}`}
                        style=
                            {{
                                width : bubbleData.radius * 2,
                                aspectRatio : 1,
                                top : -bubbleData.radius,
                                left: bubbleData.center -bubbleData.radius
                            }}
                    >
                    </div>)
            }
            <span className={headingColor}>{heading}</span>
            { 
                info.map( infoItem => 
                    <span 
                        key={`${cloudIndex}-${heading}-${infoItem}`} 
                        className={infoColor}
                    >
                        {infoItem}
                    </span>) 
            }
    </div>
            }


        </>

    )
} 