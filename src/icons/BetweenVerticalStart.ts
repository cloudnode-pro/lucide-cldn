import {Icon} from "../Icon.js";

export class BetweenVerticalStart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="13" x="3" y="8" rx="1"/><path d="M15 2 12 5 9 2"/><rect width="7" height="13" x="14" y="8" rx="1"/></svg>`
        ).node);
    }
}
