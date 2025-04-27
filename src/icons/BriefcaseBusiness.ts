import {Icon} from "../Icon.js";

export class BriefcaseBusiness extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 6V4A2 2 0 0 0 14 2H10A2 2 0 0 0 8 4V6M22 13A18 18 0 0 1 2 13"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`
        ).node);
    }
}
