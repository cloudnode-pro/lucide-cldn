import {Icon} from "../Icon.js";

export class RulerDimensionLine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15V12M16 15V12M20 6H4M20 8V4M4 8V4M8 15V12"/><rect width="18" height="7" x="3" y="12" rx="1"/></svg>`
        ).node);
    }
}
