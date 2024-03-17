import IconLabel from "./IconLabel";



export default function IconLink({ href, icon, children, className, download }) {
    return (
        <a href={href} target="_blank" download={download}
            className={`hover:text-blue-200 hover:cursor-pointer px-3 py-1 ${className}`}>
            <IconLabel icon={icon}>
                {children}
            </IconLabel>
        </a>
    );
}