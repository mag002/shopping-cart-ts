
interface ButtonProps {
    children: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, onClick }: ButtonProps) {

    return <button className="bg-black text-white rounded px-3 py-2" onClick={onClick}>{children}</button>
}

export default Button