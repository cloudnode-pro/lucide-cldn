import {Icon} from "../Icon.js";

export class CornerRightUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="10 9 15 4 20 9"/><path d="M4 20H11A4 4 0 0 0 15 16V4"/></svg>`
        ).node);
    }
}
