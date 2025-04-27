import {Icon} from "../Icon.js";

export class CirclePercent extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15 9 9 15M15 15"/></svg>`
        ).node);
    }
}
