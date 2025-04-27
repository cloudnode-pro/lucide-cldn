import {Icon} from "../Icon.js";

export class Flashlight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6C18 8 16 8 16 10V20A2 2 0 0 1 14 22H10A2 2 0 0 1 8 20V10C8 8 6 8 6 6V2H18z"/><line x1="6" x2="18" y1="6" y2="6"/><line x1="12" x2="12" y1="12" y2="12"/></svg>`
        ).node);
    }
}
