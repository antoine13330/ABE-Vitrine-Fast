type Props = {
  children: React.ReactNode
}
export function TypoH3({ children }: Props) {
  return (
    <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
      {children}
    </h3>
  )
}
