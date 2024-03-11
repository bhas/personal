


export default function IconLabel({ icon, children, className}) {
    return (
        <div className={`flex flex-row leading-none gap-2 items-center ${className}`} >
            {icon && <i className={icon}></i>}
            {children}
        </div>
    );
}