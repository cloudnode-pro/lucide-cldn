import {Icon} from "../Icon.js";

export class GalleryThumbnails extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21H5M9 21H10M14 21H15M19 21H20"/></svg>`
        ).node);
    }
}
