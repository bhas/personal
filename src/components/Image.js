
export default function Image({src, alt, caption, width, height}) {
    return (
        <div className="flex flex-col items-center m-2.5 shrink-0">
            <img className="rounded-md" width={width} height={height} src={src} alt={alt}/>
            <div className="text-sm text-gray-400 m-2 max-w-56">{caption}</div>
        </div>
    )
}