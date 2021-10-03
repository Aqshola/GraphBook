import React from 'react'
import clsx from "clsx"


interface ContainerProps {
    size: | "xl" | "lg" | "md" | "sm",
    className: string,
    children: React.ReactNode
}

export default function Container({ size = "xl", ...props }: ContainerProps) {
    return (
        <div className={clsx("w-screen",
            props.className,
            size === "xl" && ["max-w-screen-xl"],
            size === "lg" && ["max-w-screen-lg"],
            size === "md" && ["max-w-screen-md"],
            size === "sm" && ["max-w-screen-sm"]
        )}>
            {props.children}
        </div>
    )
}

