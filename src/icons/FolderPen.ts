import {Icon} from "../Icon.js";

export class FolderPen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 11.5V5A2 2 0 0 1 4 3H7.9A2 2 0 0 1 9.6 3.9L10.4 5.1Q11 6 12.1 6H20A2 2 0 0 1 22 8V18A2 2 0 0 1 20 20H10.5"/><path d="M11.4 13.6A1 1 0 1 0 8.4 10.6L3.4 15.6 2.9 16.5 2 19.4A.5.5 0 0 0 2.6 20L5.6 19 6.3 18.6z"/></svg>`
        ).node);
    }
}
