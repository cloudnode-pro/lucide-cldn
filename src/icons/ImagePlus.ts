import {Icon} from "../Icon.js";

export class ImagePlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 5H22M19 2V8M21 11.5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H12.5"/><path d="M21 15 18 12A2 2 0 0 0 15 12L6 21"/><circle cx="9" cy="9" r="2"/></svg>`
        ).node);
    }
}
