import {Icon} from "../Icon.js";

export class DatabaseBackup extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12A9 3 0 0 0 8 14.7M21 9.3V5"/><path d="M3 5V19A9 3 0 0 0 9.5 21.9M12 12V16H16"/><path d="M13 20A5 5 0 0 0 22 17 4.5 4.5 0 0 0 17.5 12.5Q15.5 12.5 14.1 13.9L12 16"/></svg>`
        ).node);
    }
}
