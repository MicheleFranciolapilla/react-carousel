import style from "../assets/style/modules/InfoCloudStyle.module.css";

export default function InfoCloud({heading, info, headingColor, infoColor, bgColor})
{
    return (
        <>
            <div className={`${style.mainCloud} ${bgColor}`}>
                <span className={headingColor}>{heading}</span>
                    { 
                        info.map( infoItem => 
                            <span 
                                key={`${Math.random() * 1000}-${infoItem}`} 
                                className={infoColor}
                            >
                                    {infoItem}
                            </span>) 
                    }
            </div>
        </>
    )
}