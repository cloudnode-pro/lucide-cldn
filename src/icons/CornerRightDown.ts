import {Icon} from "../Icon.js";

export class CornerRightDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="10 15 15 20 20 15"/><path d="M4 4H11A4 4 0 0 1 15 8V20"/></svg>`
        ).node);
    }
}
