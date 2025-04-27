import {Icon} from "../Icon.js";

export class UnfoldVertical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22V16M12 8V2M4 12H2M10 12H8M16 12H14M22 12H20M15 19 12 22 9 19M15 5 12 2 9 5"/></svg>`
        ).node);
    }
}
