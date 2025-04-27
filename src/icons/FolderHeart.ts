import {Icon} from "../Icon.js";

export class FolderHeart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 20H4A2 2 0 0 1 2 18V5A2 2 0 0 1 4 3H7.9A2 2 0 0 1 9.6 3.9L10.4 5.1A2 2 0 0 0 12.1 6H20A2 2 0 0 1 22 8V9.5"/><path d="M13.9 17.5C12.7 16.2 12.8 14.6 13.7 13.7A2.4 2.4 0 0 1 17.1 13.7L17.5 14.1 17.8 13.7A2.4 2.4 0 0 1 21.3 13.7Q22.9 15.4 21 17.5L17.5 21Z"/></svg>`
        ).node);
    }
}
