import {Icon} from "../Icon.js";

export class CircleArrowOutDownLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12A10 10 0 1 1 12 22M2 22 12 12M8 22H2V16"/></svg>`
        ).node);
    }
}
