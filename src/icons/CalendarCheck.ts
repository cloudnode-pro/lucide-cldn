import {Icon} from "../Icon.js";

export class CalendarCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2V6M16 2V6"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10H21M9 16 11 18 15 14"/></svg>`
        ).node);
    }
}
