import {Icon} from "../Icon.js";

export class AlignVerticalDistributeCenter extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17H19M22 7H17M5 17H2M7 7H2"/><rect width="14" height="6" x="5" y="14" rx="2"/><rect width="10" height="6" x="7" y="4" rx="2"/></svg>`
        ).node);
    }
}
