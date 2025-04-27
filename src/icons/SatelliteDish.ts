import {Icon} from "../Icon.js";

export class SatelliteDish extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 10A7.3 7.3 0 0 0 14 20ZM9 15 12 12M17 13A6 6 0 0 0 11 7M21 13A10 10 0 0 0 11 3"/></svg>`
        ).node);
    }
}
