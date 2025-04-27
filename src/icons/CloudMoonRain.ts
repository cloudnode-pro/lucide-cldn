import {Icon} from "../Icon.js";

export class CloudMoonRain extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.2 8.5A6 6 0 0 1 16 4 1 1 0 0 0 22 10 6 6 0 0 1 19 15.2M11 20V22M3 20A5 5 0 1 1 11.9 16H13A3 3 0 0 1 15 21.2M7 19V21"/></svg>`
        ).node);
    }
}
