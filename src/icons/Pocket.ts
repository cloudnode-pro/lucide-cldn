import {Icon} from "../Icon.js";

export class Pocket extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 3H20A2 2 0 0 1 22 5V11A10 10 0 0 1 12 21 10 10 0 0 1 2 11V5A2 2 0 0 1 4 3"/><polyline points="8 10 12 14 16 10"/></svg>`
        ).node);
    }
}
