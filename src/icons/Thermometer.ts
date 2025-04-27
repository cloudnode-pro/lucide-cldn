import {Icon} from "../Icon.js";

export class Thermometer extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 4V14.5A4 4 0 1 1 10 14.5V4A2 2 0 0 1 14 4"/></svg>`
        ).node);
    }
}
