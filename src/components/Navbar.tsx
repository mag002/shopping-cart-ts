import { CartItem } from "../types"
import Button from "./Button"

function Navbar({ cart }: { cart: CartItem[] }) {
    // function handleNavbarItemClick(title: string): void {
    //     alert(title)
    // }
    return <nav className="navbar">
        <div>
            Logo
        </div>
        <div>
            <Button >Home</Button>
            <Button >About</Button>
            <Button >Cart ({cart.length})</Button>
        </div>
    </nav >
}

export default Navbar