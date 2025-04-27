import {Icon} from "../Icon.js";

export class Projector extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 7 3 5M9 6V3M13 7 15 5"/><circle cx="9" cy="13" r="3"/><path d="M11.8 12H20A2 2 0 0 1 22 14V18A2 2 0 0 1 20 20H4A2 2 0 0 1 2 18V14A2 2 0 0 1 4 12H6.2M16 16H18"/></svg>`
        ).node);
    }
}
