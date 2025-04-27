import {Icon} from "../Icon.js";

export class HeartMinus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.5 19.5 12 21 5 14C3.5 12.6 2 10.8 2 8.5A5.5 5.5 0 0 1 7.5 3C9.3 3 10.5 3.5 12 5 13.5 3.5 14.7 3 16.5 3A5.5 5.5 0 0 1 21.9 9.5M15 15H21"/></svg>`
        ).node);
    }
}
