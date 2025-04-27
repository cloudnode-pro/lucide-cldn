import {Icon} from "../Icon.js";

export class ImagePlay extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 16 6 21M11 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V11.5"/><path d="M15.8 22A.5.5 0 0 1 15 21.6V13.4A.5.5 0 0 1 15.8 13L21.6 16.6A1 1 0 0 1 21.6 18.3z"/><circle cx="9" cy="9" r="2"/></svg>`
        ).node);
    }
}
