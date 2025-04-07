import { ChangeEvent } from "react";

export interface CheckboxProps {
    name: string,
    type?: 'checkbox', 
    id?: string,
    checked?: boolean,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    error?: string
}