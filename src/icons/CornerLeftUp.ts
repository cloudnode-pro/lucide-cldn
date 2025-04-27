import {Icon} from "../Icon.js";

export class CornerLeftUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="14 9 9 4 4 9"/><path d="M20 20H13A4 4 0 0 1 9 16V4"/></svg>`
        ).node);
    }
}
