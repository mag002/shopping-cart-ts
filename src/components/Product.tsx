import { useState } from "react";
import { Product as ProductType } from "../types";
import Button from "./Button";

interface ProductProps extends ProductType {
    isShow: boolean
}

function Product({ name, price, category }: ProductProps) {
    const [selected, setSelected] = useState(false);
    // state
    // selected

    const handleSelect = () => {
        setSelected(!selected)
    }

    // CategoryBadge

    return <div className="border rounded p-3">
        <div>{name} - {price}$ | <span>{category}</span>
            <span className={`bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300`}>Default</span>
        </div>

        <Button>Add to Cart</Button>
        {/* {selected ? <button>Selected</button> : <button>Select</button>} */}
    </div>
    // 17:57 | 20:57
}
export default Product

/**
 *
export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}
 *

<div>
    <h2>name</h2>
    <p>email</p>
</div>

2 users: patrick - patrick.le1@nab.com.au
         phuc - lehongphuc7394@gmail.com

*
 */

//  18:20 | 21:20