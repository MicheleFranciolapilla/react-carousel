export default function RoundedThumb({filePath, styleClasses})
{
    return (
        <div className={styleClasses}>
            <img src={filePath} alt="Immagine da visualizzare" />
        </div>
    );
}