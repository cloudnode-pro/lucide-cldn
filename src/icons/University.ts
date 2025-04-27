import {Icon} from "../Icon.js";

export class University extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="10" r="1"/><path d="M22 20V8H18L12 4 6 8H2V20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20M18 13"/><path d="M14 22V17A2 2 0 0 0 12 15 2 2 0 0 0 10 17V22"/></svg>`
        ).node);
    }
}
