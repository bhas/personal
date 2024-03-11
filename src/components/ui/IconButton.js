import IconLabel from "./IconLabel";



export default function IconButton({ onClick, icon, children, className }) {
    return (
        <button onClick={onClick} className={`hover:text-white hover:cursor-pointer p-2.5 rounded ${className}`}>
            <IconLabel icon={icon}>
                {children}
            </IconLabel>
        </button>
    );
}