import { useTheme } from "next-themes"
import { MagicCard } from "../magicui/magic-card"

export const Card = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme()

  return (
    <MagicCard
      gradientColor={resolvedTheme === "dark" ? "#262626" : "#D9D9D955"}
      className="flex min-w-[180px] cursor-pointer items-center justify-center md:min-w-[300px]"
    >
      <div className="flex h-full flex-col items-center justify-center gap-2 px-8 py-4 text-xl md:px-16">
        {children}
      </div>
    </MagicCard>
  )
}
