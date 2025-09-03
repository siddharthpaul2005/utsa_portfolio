export function BadgeGroup({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((x) => (
        <li key={x} className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-800">
          {x}
        </li>
      ))}
    </ul>
  )
}
