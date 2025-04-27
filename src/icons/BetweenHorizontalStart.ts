import {Icon} from "../Icon.js";

export class BetweenHorizontalStart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="13" height="7" x="8" y="3" rx="1"/><path d="M2 9 5 12 2 15"/><rect width="13" height="7" x="8" y="14" rx="1"/></svg>`
        ).node);
    }
}
