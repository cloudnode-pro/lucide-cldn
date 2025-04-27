import {Icon} from "../Icon.js";

export class CornerDownRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 10 20 15 15 20"/><path d="M4 4V11A4 4 0 0 0 8 15H20"/></svg>`
        ).node);
    }
}
