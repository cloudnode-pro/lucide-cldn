import {Icon} from "../Icon.js";

export class CloudDownload extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V21L8 17M12 21 16 17"/><path d="M4.4 15.3A7 7 0 1 1 15.7 8H17.5A4.5 4.5 0 0 1 19.9 16.3"/></svg>`
        ).node);
    }
}
