import {Icon} from "../Icon.js";

export class FlagTriangleLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 22V2L7 7 17 12"/></svg>`
        ).node);
    }
}
