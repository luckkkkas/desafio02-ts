import { MouseEventHandler } from "react";

export interface IButton{
    label: string,
    onClick: MouseEventHandler,
    color: string
}