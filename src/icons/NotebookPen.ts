import {Icon} from "../Icon.js";

export class NotebookPen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.4 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V12.6M2 6H6M2 10H6M2 14H6M2 18H6"/><path d="M21.4 5.6A1 1 0 1 0 18.4 2.6L13.4 7.6 12.9 8.5 12 11.4A.5.5 0 0 0 12.6 12L15.6 11 16.3 10.6z"/></svg>`
        ).node);
    }
}
