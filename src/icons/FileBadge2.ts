import {Icon} from "../Icon.js";

export class FileBadge2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.7 12.5 15 17.4A.5.5 0 0 1 14.3 17.9L12.4 17.2H11.6L9.7 18A.5.5 0 0 1 9 17.4L10.3 12.4"/><path d="M15 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7z"/><circle cx="12" cy="10" r="3"/></svg>`
        ).node);
    }
}
