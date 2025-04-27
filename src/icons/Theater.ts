import {Icon} from "../Icon.js";

export class Theater extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 10S5 7 5 2M22 10S19 7 19 2"/><path d="M10 2A8 8 0 0 1 2 10M14 2A8 8 0 0 0 22 10M2 10S4 12 4 15M22 10S20 12 20 15M8 15H16M2 22V21A2 2 0 0 1 4 19H8A2 2 0 0 1 10 21V22M14 22V21A2 2 0 0 1 16 19H20A2 2 0 0 1 22 21V22"/></svg>`
        ).node);
    }
}
