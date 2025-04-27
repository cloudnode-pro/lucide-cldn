import {Icon} from "../Icon.js";

export class SunSnow extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 21V20M10 4V3M10 9A3 3 0 0 0 10 15M14 20 15.3 17.5 18 18M14 4 15.3 6.5 18 6"/><path d="M17 21 14 15 15.5 12H22M17 3 14 9 15.5 12M2 12H3"/><path d="M20 10 18.5 12 20 14M3.6 18.4 4.3 17.7M4.3 6.3 3.6 5.6"/></svg>`
        ).node);
    }
}
