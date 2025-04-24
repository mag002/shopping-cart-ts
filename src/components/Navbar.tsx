import Button from "./Button"

function Navbar() {
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
            <Button >Cart (0)</Button>
        </div>
    </nav >
}

export default Navbar