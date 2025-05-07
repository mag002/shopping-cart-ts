export function CategoryBadge({ category }: { category: string }) {
    return <span className={`px-2 py-1 rounded text-sm bg-green-100 text-green-700`}>{category}</span>;
}

