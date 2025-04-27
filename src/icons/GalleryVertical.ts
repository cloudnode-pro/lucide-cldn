import {Icon} from "../Icon.js";

export class GalleryVertical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 2H21"/><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M3 22H21"/></svg>`
        ).node);
    }
}
