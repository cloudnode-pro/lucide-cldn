import {Icon} from "../Icon.js";

export class HardDriveDownload extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V10M16 6 12 10 8 6"/><rect width="20" height="8" x="2" y="14" rx="2"/></svg>`
        ).node);
    }
}
