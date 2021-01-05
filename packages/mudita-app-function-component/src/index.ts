import { FunctionComponent } from "react"

export type AppFunctionComponent<P = {}> = FunctionComponent<
  Readonly<P & { className?: string }>
>
