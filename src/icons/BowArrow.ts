import {Icon} from "../Icon.js";

export class BowArrow extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 3H21V7M18.6 11A13 13 0 0 1 19.6 20.2 1.2 1.2 0 0 1 17.7 20.7L14 17M7 10 3.3 6.3A1.2 1.2 0 0 1 3.9 4.3 13 13 0 0 1 12.9 5.5M7 14A2 2 0 0 0 5.8 14.5L3 17.1A.5.5 0 0 0 3.5 18H5A1 1 0 0 1 6 19V20.5A.5.5 0 0 0 6.9 20.9L9.5 18.2A2 2 0 0 0 10 17V15A1 1 0 0 0 9 14zM9.7 14.3 21 3"/></svg>`
        ).node);
    }
}
