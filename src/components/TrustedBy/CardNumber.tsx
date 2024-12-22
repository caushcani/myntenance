import NumberTicker from "../magicui/number-ticker"

export const CardNumber = ({
  children,
  value,
}: {
  children: React.ReactNode
  value: number
}) => {
  return (
    <div className="mb-auto flex items-center gap-1 text-xl font-semibold md:text-4xl">
      <NumberTicker value={value} />
      {children}
    </div>
  )
}
