import { useEffect, useState } from "react"
import Button from "./Button";

function Example({ count }: { count: number }) {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        console.log('Use Effect call back run!')
        return () => {
            console.log("RETURN Function OF USEFFECT CALLBACK")
        }
    }, [])
    // if useEffect Depedencies is undefined => useEffect callback will run every time props/state changed
    // depedency = [] => useEffect callback will run only 1 time when component mounted
    // depedency = [someItem (props/state/refs)] => useEffect callback will run everytime when that Depedency item changed

    // useEffectCallback(1)  => return of useEffectCallback(1) =>  useEffectCallback(2)  
    return <div>OK
        <Button onClick={() => setToggle(!toggle)}>{toggle.toString()}</Button>
    </div>
}

export default Example