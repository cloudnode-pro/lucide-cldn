import {Icon} from "../Icon.js";

export class FlipVertical2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 3 12 8 7 3zM17 21 12 16 7 21zM4 12H2M10 12H8M16 12H14M22 12H20"/></svg>`
        ).node);
    }
}
