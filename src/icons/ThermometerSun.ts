import {Icon} from "../Icon.js";

export class ThermometerSun extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9A4 4 0 0 0 10 16.5M12 3V5M6.6 18.4 5.2 19.8M20 4V14.5A4 4 0 1 1 16 14.5V4A2 2 0 0 1 20 4M4 13H2M6.3 7.3 5 6"/></svg>`
        ).node);
    }
}
