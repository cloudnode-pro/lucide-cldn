import {Icon} from "../Icon.js";

export class FolderClock extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="16" cy="16" r="6"/><path d="M7 20H4A2 2 0 0 1 2 18V5A2 2 0 0 1 4 3H7.9A2 2 0 0 1 9.6 3.9L10.4 5.1A2 2 0 0 0 12.1 6H20A2 2 0 0 1 22 8M16 14V16L17 17"/></svg>`
        ).node);
    }
}
