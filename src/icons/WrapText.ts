import {Icon} from "../Icon.js";

export class WrapText extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="3" x2="21" y1="6" y2="6"/><path d="M3 12H18A3 3 0 1 1 18 18H14"/><polyline points="16 16 14 18 16 20"/><line x1="3" x2="10" y1="18" y2="18"/></svg>`
        ).node);
    }
}
