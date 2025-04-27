import {Icon} from "../Icon.js";

export class GalleryHorizontalEnd extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 7V17M6 5V19"/><rect width="12" height="18" x="10" y="3" rx="2"/></svg>`
        ).node);
    }
}
