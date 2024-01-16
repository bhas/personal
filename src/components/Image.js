import "./Image.css";



export default function Image({src, alt, caption, width, height}) {
    return (
        <div className="image-container">
            <img className="image" width={width} height={height} src={src} alt={alt}/>
            <div className="image-caption">{caption}</div>
        </div>
    )
}