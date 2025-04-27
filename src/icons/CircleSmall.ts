import {Icon} from "../Icon.js";

export class CircleSmall extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/></svg>`
        ).node);
    }
}
