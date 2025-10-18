"use client"

import * as React from "react"
import { Check, ChevronsUpDown, LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect } from "react"
export type ComboBoxOption = { label: string, value: string, icon? :  LucideIcon}
type Props = {
    options: ComboBoxOption[],
    showSearch?: boolean,
    defaultValue?: string,
    searchPlaceholder?: string,
    onChange?: (value: string) => void,
}
export function ComboBox({ options, showSearch = false, defaultValue = "", searchPlaceholder = "Chercher...", onChange }: Props) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(defaultValue)
    useEffect(() => {
        if (value && onChange) {
            onChange(value)
        }
    }, [value, onChange])
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {value
                        ? options.find((option) => option.value === value)?.label
                        : "Selectionner une option..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    {showSearch &&
                        <CommandInput placeholder={searchPlaceholder} />
                    }
                    <CommandEmpty>
                        Pas de résultats...
                    </CommandEmpty>
                    <CommandList>
                        {options.map((option) => (
                            <CommandItem
                                key={option.value}
                                value={option.value}
                                onSelect={(currentValue: string) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === option.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {option.icon && <option.icon className="mr-2 h-4 w-4" />}
                                {option.label}
                            </CommandItem>
                        ))}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
