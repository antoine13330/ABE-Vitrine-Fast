type Props = {
    children: React.ReactNode
    className?: string
  }
export function TypoMuted({
    children,
    className
  }: Props) {
    return (
        <p className={`${className} text-sm text-muted-foreground`}>
            {children}
        </p>
    )
  }
  