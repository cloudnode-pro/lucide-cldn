import {Icon} from "../Icon.js";

export class ArrowUp01 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8 7 4 11 8M7 4V20"/><rect width="4" height="6" x="15" y="4" ry="2"/><path d="M17 20V14H15M15 20H19"/></svg>`
        ).node);
    }
}
