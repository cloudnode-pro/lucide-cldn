import {Icon} from "../Icon.js";

export class Briefcase extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 20V4A2 2 0 0 0 14 2H10A2 2 0 0 0 8 4V20"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`
        ).node);
    }
}
