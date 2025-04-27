import {Icon} from "../Icon.js";

export class Wifi extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8.8A15 15 0 0 1 22 8.8M5 12.9A10 10 0 0 1 19 12.9M8.5 16.4A5 5 0 0 1 15.5 16.4"/></svg>`
        ).node);
    }
}
