import style from "../assets/style/modules/InfoCloudStyle.module.css";

export default function VirtualInfoText({heading, info, headingColor, infoColor, index})
{
    return (
        <div id={`${index}-${heading}-${info[0]}`} className={`${style.mainCloud} absolute`} style={{top:-1000000}}>
            <span className={headingColor}>{heading}</span>
            { 
                info.map( infoItem => 
                    <span 
                        key={`${index}-${heading}-${infoItem}`} 
                        className={infoColor}
                    >
                        {infoItem}
                    </span>) 
            }
        </div>
    )
}