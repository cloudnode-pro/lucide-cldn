import {Icon} from "../Icon.js";

export class CornerLeftDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="14 15 9 20 4 15"/><path d="M20 4H13A4 4 0 0 0 9 8V20"/></svg>`
        ).node);
    }
}
