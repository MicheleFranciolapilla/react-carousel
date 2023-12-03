import style from "../assets/style/modules/InfoCloudStyle.module.css";

export default function InfoCloud({heading, info, headingColor, infoColor, bgColor})
{
    return (
        <>
            <div className={`${style.mainCloud} ${bgColor}`}>
                <h2 className={headingColor}>{heading}</h2>
                    { 
                        info.map( infoItem => 
                            <h5 
                                key={`${Math.random() * 1000}-${infoItem}`} 
                                className={infoColor}
                            >
                                    {infoItem}
                            </h5>) 
                    }
            </div>
        </>
    )
}