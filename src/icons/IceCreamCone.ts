import {Icon} from "../Icon.js";

export class IceCreamCone extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 11 11 21.4A1 1 0 0 0 13 21.4L17 11M17 7A5 5 0 0 0 7 7M17 7A2 2 0 0 1 17 11H7A2 2 0 0 1 7 7"/></svg>`
        ).node);
    }
}
