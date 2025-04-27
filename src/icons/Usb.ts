import {Icon} from "../Icon.js";

export class Usb extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="10" cy="7" r="1"/><circle cx="4" cy="20" r="1"/><path d="M4.7 19.3 19 5M21 3 18 4 20 6ZM9.3 7.7 5 12 7 17M10 14 15 16 18.5 12.5"/><path d="M18 12 19 11 20 12 19 13Z"/></svg>`
        ).node);
    }
}
