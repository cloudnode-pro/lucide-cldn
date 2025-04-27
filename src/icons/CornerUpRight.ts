import {Icon} from "../Icon.js";

export class CornerUpRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 14 20 9 15 4"/><path d="M4 20V13A4 4 0 0 1 8 9H20"/></svg>`
        ).node);
    }
}
