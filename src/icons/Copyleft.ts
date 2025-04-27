import {Icon} from "../Icon.js";

export class Copyleft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.2 14.8A4 4 0 1 0 9.2 9.2"/></svg>`
        ).node);
    }
}
