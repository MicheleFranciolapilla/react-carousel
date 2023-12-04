import style from "../assets/style/modules/InfoCloudStyle.module.css";

import VirtualInfoText from "./VirtualInfoText";

export default function InfoCloud({heading, info, headingColor, infoColor, bgColor, cloudIndex})
{
    function appendOnVirtual()
    {
        const findItemToVirtualize = setInterval( () =>
            {
                const itemToVirtualize = document.getElementById(`${cloudIndex}-${heading}-${info[0]}`);
                console.log("ITEM TO FIND: ", itemToVirtualize);
                if (itemToVirtualize)
                {
                    const virtualContainer = document.getElementById(`VIRTUAL-${cloudIndex}`);
                    virtualContainer.append(itemToVirtualize);
                    clearInterval(findItemToVirtualize);
                    console.log("RICERCA ULTIMATA: ", itemToVirtualize);
                    console.log("WIDTH: ", itemToVirtualize.offsetWidth);
                    console.log("HEIGHT: ", itemToVirtualize.offsetHeight);
                }
            }, 300);
    }
    function getCloudSizes()
    {
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
        </>

    )
} 