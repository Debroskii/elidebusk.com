export type SideScrollGalleryProps = {
    rowCount: number,
    rowHeight: number | string,
    images: GalleryPhoto[]
}

export type GalleryPhoto = {
    url: string,
    orientation: GalleryPhotoOrientation
}

export enum GalleryPhotoOrientation {
    SQUARE,
    LANDSCAPE,
    PORTRAIT
}

export type GalleryRow = {
    images: GalleryPhoto[],
    scrollPosition: number,
    moveLeft: boolean
}

export function importImage(url: string): GalleryPhoto {
    return {} as GalleryPhoto;
}

export default function SideScrollGallery({rowCount, rowHeight, images}: SideScrollGalleryProps) {
    let rows = [];
    let rowMemberCount = Math.floor(images.length / rowCount)
    for(let i = 0; i < rowCount; i++) {
        
    }

    return <>

    </>
}