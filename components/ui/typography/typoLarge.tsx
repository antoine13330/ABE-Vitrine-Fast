type Props = {
    children: React.ReactNode,
    className?: string
}
export function TypoLarge({ children, className }: Props) {
    return <div className={`text-lg font-semibold ${className}`}>{children}</div>
  }
  