import IconLabel from "./IconLabel";



export default function IconLink({ href, icon, children, className }) {
    return (
        <a href={href} target="_blank"
            className={`hover:text-blue-200 hover:cursor-pointer px-3 py-1 ${className}`}>
            <IconLabel icon={icon}>
                {children}
            </IconLabel>
        </a>
    );
}