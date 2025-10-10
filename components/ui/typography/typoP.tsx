type Props = {
    children: React.ReactNode
    className?: string
  }

export function TypoP({children, className} : Props) {
    return (
      <p className={`${className}leading-7 text-sm`}>
        {children}
      </p>
    )
  }
  