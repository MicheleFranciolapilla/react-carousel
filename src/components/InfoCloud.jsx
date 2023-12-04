import style from "../assets/style/modules/InfoCloudStyle.module.css";

import HiddenInfoText from "./HiddenInfoText";

export default function InfoCloud({heading, info, headingColor, infoColor, bgColor, cloudIndex})
{
    function getCloudSizes()
    {
        const cloudItem = document.getElementById(`${cloudIndex}-${heading}-${info[0]}`);
        console.log(cloudItem);
    }

    return (
        <>
            <HiddenInfoText 
                heading={heading}
                info={info}
                headingColor={headingColor}
                infoColor={infoColor}
                index={cloudIndex}
            />
            { getCloudSizes() }
        </>

    )
} 