
interface ButtonProps {
    children: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, onClick }: ButtonProps) {

    return <button onClick={onClick}>{children}</button>
}

export default Button