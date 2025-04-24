import { Category } from "../types";

export function CategoryBadge({ category }: { category: Category }) {
    const color = category === "phone" ? "bg-green-100 text-green-700"
        : category === "tablet" ? "bg-blue-100 text-blue-700"
            : "bg-purple-100 text-purple-700";

    return <span className={`px-2 py-1 rounded text-sm ${color}`}>{category}</span>;
}

