import {Icon} from "../Icon.js";

export class CornerUpLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 14 4 9 9 4"/><path d="M20 20V13A4 4 0 0 0 16 9H4"/></svg>`
        ).node);
    }
}
