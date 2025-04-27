import {Icon} from "../Icon.js";

export class Axis3d extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4V20H20M4 20 11 13"/></svg>`
        ).node);
    }
}
