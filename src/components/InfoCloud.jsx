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
                }
            }, 300);
    }

    function setBubblesCenters()
    {
        upperBubbles.push(0);
        let beginU = 0;
        let endU = itemWidth;
        while (beginU < endU)
        {
            beginU += Math.ceil(Math.random() * (endU - beginU)); 
            if (beginU < endU)
                upperBubbles.push(beginU);
        }
        upperBubbles.push(endU);

        lowerBubbles.push(0);
        let beginL = 0;
        let endL = itemWidth;
        while (beginL < endL)
        {
            beginL += Math.ceil(Math.random() * (endL - beginL)); 
            if (beginL < endL)
                lowerBubbles.push(beginL);
        }
        lowerBubbles.push(endL);
//************************************************************* */
        rightBubbles.push(0);
        let beginR = 0;
        let endR = itemHeight;
        while (beginR < endR)
        {
            beginR += Math.ceil(Math.random() * (endR - beginR)); 
            if (beginR < endR)
                rightBubbles.push(beginR);
        }
        rightBubbles.push(endR);

        leftBubbles.push(0);
        let beginS = 0;
        let endS = itemHeight;
        while (beginS < endS)
        {
            beginS += Math.ceil(Math.random() * (endS - beginS)); 
            if (beginS < endS)
                leftBubbles.push(beginS);
        }
        leftBubbles.push(endS);
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
            { setBubblesCenters() }

            <div id={`${cloudIndex}-${heading}-${info[0]}`} className={`${style.mainCloud} ${bgColor} relative`}>
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
        </>

    )
} 