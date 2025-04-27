import {Icon} from "../Icon.js";

export class Grid2x2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3V21M3 12H21"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>`
        ).node);
    }
}
