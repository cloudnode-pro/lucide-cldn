import {Icon} from "../Icon.js";

export class AtSign extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M16 8V13A3 3 0 0 0 22 13V12A10 10 0 1 0 18 20"/></svg>`
        ).node);
    }
}
