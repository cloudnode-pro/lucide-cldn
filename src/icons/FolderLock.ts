import {Icon} from "../Icon.js";

export class FolderLock extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="5" x="14" y="17" rx="1"/><path d="M10 20H4A2 2 0 0 1 2 18V5A2 2 0 0 1 4 3H7.9A2 2 0 0 1 9.6 3.9L10.4 5.1A2 2 0 0 0 12.1 6H20A2 2 0 0 1 22 8V10.5"/><path d="M20 17V15A2 2 0 1 0 16 15V17"/></svg>`
        ).node);
    }
}
