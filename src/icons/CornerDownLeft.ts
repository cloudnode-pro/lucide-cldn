import {Icon} from "../Icon.js";

export class CornerDownLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 10 4 15 9 20"/><path d="M20 4V11A4 4 0 0 1 16 15H4"/></svg>`
        ).node);
    }
}
