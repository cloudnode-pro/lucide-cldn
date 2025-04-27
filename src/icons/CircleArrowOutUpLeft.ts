import {Icon} from "../Icon.js";

export class CircleArrowOutUpLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8V2H8M2 2 12 12M12 2A10 10 0 1 1 2 12"/></svg>`
        ).node);
    }
}
