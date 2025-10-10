import { ReactElement } from "react"

export interface NavbarItem extends NavbarLinkItem {
    children?: ReactElement<any, any>
    childrenLinks?: NavbarLinkItem[]
}
export interface NavbarLinkItem {
    title: string
    href?: string
    icon ?: ReactElement<any, any>
    description?: string
}
