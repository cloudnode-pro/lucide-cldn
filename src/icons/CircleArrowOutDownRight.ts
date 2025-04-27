import {Icon} from "../Icon.js";

export class CircleArrowOutDownRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22A10 10 0 1 1 22 12M22 22 12 12M22 16V22H16"/></svg>`
        ).node);
    }
}
