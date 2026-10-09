import type { ReactNode } from "react";

export default function Heading({children}: {children: ReactNode}) {
    return <>
        <h1 className="Heading">{children}</h1>
    </>
}