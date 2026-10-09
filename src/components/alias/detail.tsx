import type { ReactNode } from "react";

export default function Detail({children}: {children: ReactNode}) {
    return <>
        <p className="Detail">{children}</p>
    </>
}