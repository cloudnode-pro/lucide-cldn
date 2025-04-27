import {Icon} from "../Icon.js";

export class FolderOpenDot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 14 7.5 11.1A2 2 0 0 1 9.2 10H20A2 2 0 0 1 22 12.5L20.3 18.5A2 2 0 0 1 18.4 20H4A2 2 0 0 1 2 18V5Q2.2 3.2 4 3H8A2 2 0 0 1 9.5 3.9L10.4 5.1A2 2 0 0 0 12.1 6H18A2 2 0 0 1 20 8V10"/><circle cx="14" cy="15" r="1"/></svg>`
        ).node);
    }
}
