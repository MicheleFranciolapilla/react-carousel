import style from "../assets/style/modules/InfoCloudStyle.module.css";

export default function InfoCloud({features})
{
    return (
        <>
            <div className={style.mainCloud}>
                <h2>{features.heading}</h2>
                <h5>{}features.info</h5>
            </div>
        </>
    )
}