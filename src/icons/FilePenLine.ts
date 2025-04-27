import {Icon} from "../Icon.js";

export class FilePenLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 5 15.6 2.6A2 2 0 0 0 14.2 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20"/><path d="M21.4 12.6A1 1 0 0 0 18.4 9.6L14.4 13.6 13.9 14.5 13 17.4A.5.5 0 0 0 13.6 18L16.6 17 17.3 16.6zM8 18H9"/></svg>`
        ).node);
    }
}
