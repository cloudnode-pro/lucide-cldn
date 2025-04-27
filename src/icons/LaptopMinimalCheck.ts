import {Icon} from "../Icon.js";

export class LaptopMinimalCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20H22M9 10 11 12 15 8"/><rect width="18" height="12" x="3" y="4" rx="2"/></svg>`
        ).node);
    }
}
