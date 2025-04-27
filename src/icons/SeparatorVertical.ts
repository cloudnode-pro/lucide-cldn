import {Icon} from "../Icon.js";

export class SeparatorVertical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="12" x2="12" y1="3" y2="21"/><polyline points="8 8 4 12 8 16"/><polyline points="16 16 20 12 16 8"/></svg>`
        ).node);
    }
}
