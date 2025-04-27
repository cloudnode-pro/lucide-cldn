import {Icon} from "../Icon.js";

export class CarFront extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 8 19 10 17.5 6.3A2 2 0 0 0 15.6 5H8.4A2 2 0 0 0 6.5 6.3L5 10 3 8M17 14"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18V20M19 18V20"/></svg>`
        ).node);
    }
}
