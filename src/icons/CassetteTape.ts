import {Icon} from "../Icon.js";

export class CassetteTape extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M8 12H16"/><circle cx="16" cy="10" r="2"/><path d="M6 20 6.7 17.1A1.4 1.4 0 0 1 8.1 16H15.9A1.4 1.4 0 0 1 17.3 17L18 20"/></svg>`
        ).node);
    }
}
