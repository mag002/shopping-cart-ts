import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

function Button({ children, onClick, className }: ButtonProps) {

    return <button className={` rounded px-3 py-2 ${className || 'bg-black text-white'}`} onClick={onClick}>{children}</button>
}

export default Button