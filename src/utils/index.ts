import { Product } from "../types"

export function calcTotal(products: Product[]): number {
    const total = products.reduce((sum, p) => {
        return sum + p.price
    }, 0)
    return total
}