import {Icon} from "../Icon.js";

export class School extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 22V18A2 2 0 1 0 10 18V22"/><path d="M18 10 21.4 11.7A1 1 0 0 1 22 12.7V20A2 2 0 0 1 20 22H4A2 2 0 0 1 2 20V12.6A1 1 0 0 1 2.6 11.7L6 10M18 5V22M4 6 11.1 2.4A2 2 0 0 1 13 2.4L20 6M6 5V22"/><circle cx="12" cy="9" r="2"/></svg>`
        ).node);
    }
}
