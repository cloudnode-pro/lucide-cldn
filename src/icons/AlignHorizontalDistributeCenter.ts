import {Icon} from "../Icon.js";

export class AlignHorizontalDistributeCenter extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="14" x="4" y="5" rx="2"/><rect width="6" height="10" x="14" y="7" rx="2"/><path d="M17 22V17M17 7V2M7 22V19M7 5V2"/></svg>`
        ).node);
    }
}
