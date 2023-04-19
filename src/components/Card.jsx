export const Card = ({ alt, src, photographer, photographer_url }) => {

    return (
        <article className="artCat pad10 dsp-grd">

            <p className="tit-h4">{photographer}</p>
            <a href={photographer_url} className="url pad5">{photographer_url}</a>
            <img src={src} alt={alt} />

        </article>
    )
}
