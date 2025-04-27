import {Icon} from "../Icon.js";

export class BotOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.7 8H18A2 2 0 0 1 20 10V14.3M2 14H4M20 14H22M22 22 2 2M8 8H6A2 2 0 0 0 4 10V18A2 2 0 0 0 6 20H18A2 2 0 0 0 19.4 19.4M9 13V15M9.7 4H12V6.3"/></svg>`
        ).node);
    }
}
