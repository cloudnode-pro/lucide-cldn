import {Icon} from "../Icon.js";

export class Framer extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 16V9H19V2H5L19 16H12M5 16 12 23V16M5 16H12"/></svg>`
        ).node);
    }
}
