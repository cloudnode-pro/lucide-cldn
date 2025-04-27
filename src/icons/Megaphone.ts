import {Icon} from "../Icon.js";

export class Megaphone extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 11 21 6V18L3 14zM11.6 16.8A3 3 0 1 1 5.8 15.2"/></svg>`
        ).node);
    }
}
