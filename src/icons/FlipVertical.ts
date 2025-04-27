import {Icon} from "../Icon.js";

export class FlipVertical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 8V5A2 2 0 0 0 19 3H5A2 2 0 0 0 3 5V8M21 16V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V16M4 12H2M10 12H8M16 12H14M22 12H20"/></svg>`
        ).node);
    }
}
