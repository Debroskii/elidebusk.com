export type WordmarkProps = {
    size: number,
    textColor?: string,
    linkToHome: boolean
}

export default function Wordmark({size, textColor, linkToHome}: WordmarkProps) {
    let style: any = {
        fontSize: `${size}rem`,
        fontFamily: "var(--headingFont)",
        fontWeight: "900"
    }

    if(textColor) style.color = textColor;

    return <>
        <a style={style} href={linkToHome ? "index.html" : ""} className="Wordmark">elidebusk.com</a>
    </>
}