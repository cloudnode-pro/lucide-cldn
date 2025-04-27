import {Icon} from "../Icon.js";

export class BetweenHorizontalEnd extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="13" height="7" x="3" y="3" rx="1"/><path d="M22 15 19 12 22 9"/><rect width="13" height="7" x="3" y="14" rx="1"/></svg>`
        ).node);
    }
}
