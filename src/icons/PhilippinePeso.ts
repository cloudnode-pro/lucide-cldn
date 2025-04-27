import {Icon} from "../Icon.js";

export class PhilippinePeso extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 11H4M20 7H4M7 21V4A1 1 0 0 1 8 3H12A1 1 0 0 1 12 15H7"/></svg>`
        ).node);
    }
}
