import {Icon} from "../Icon.js";

export class Minimize extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3V6A2 2 0 0 1 6 8H3M21 8H18A2 2 0 0 1 16 6V3M3 16H6A2 2 0 0 1 8 18V21M16 21V18A2 2 0 0 1 18 16H21"/></svg>`
        ).node);
    }
}
