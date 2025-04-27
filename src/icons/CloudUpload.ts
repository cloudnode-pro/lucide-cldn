import {Icon} from "../Icon.js";

export class CloudUpload extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V21M4 14.9A7 7 0 1 1 15.7 8H17.5A4.5 4.5 0 0 1 20 16.2"/><path d="M8 17 12 13 16 17"/></svg>`
        ).node);
    }
}
