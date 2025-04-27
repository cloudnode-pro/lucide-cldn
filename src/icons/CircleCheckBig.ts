import {Icon} from "../Icon.js";

export class CircleCheckBig extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.8 10A10 10 0 1 1 17 3.3"/><path d="M9 11 12 14 22 4"/></svg>`
        ).node);
    }
}
