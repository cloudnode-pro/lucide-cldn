import {Icon} from "../Icon.js";

export class CircleArrowOutUpRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12A10 10 0 1 1 12 2M22 2 12 12M16 2H22V8"/></svg>`
        ).node);
    }
}
