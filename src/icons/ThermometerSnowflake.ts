import {Icon} from "../Icon.js";

export class ThermometerSnowflake extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 20 8.8 17.5 6 18M10 4 8.8 6.5 6 6M10.6 15H10M2 12H8.5L10 9M20 14.5A4 4 0 1 1 16 14.5V4A2 2 0 0 1 20 4z"/><path d="M4 10 5.5 12 4 14M7 21 10 15 8.5 12M7 3 10 9H12"/></svg>`
        ).node);
    }
}
