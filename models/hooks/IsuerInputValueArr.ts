import { ChangeEvent } from "react"

export type IuseInputValueArr = [string, {value: string, onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)}, () => void, (val: string) => void]
