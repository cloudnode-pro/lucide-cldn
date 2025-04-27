import {Icon} from "../Icon.js";

export class PaintRoller extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="16" height="6" x="2" y="2" rx="2"/><path d="M10 16V14A2 2 0 0 1 12 12H20A2 2 0 0 0 22 10V7A2 2 0 0 0 20 5H18"/><rect width="4" height="6" x="8" y="16" rx="1"/></svg>`
        ).node);
    }
}
