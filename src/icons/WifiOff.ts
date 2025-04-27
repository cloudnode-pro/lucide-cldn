import {Icon} from "../Icon.js";

export class WifiOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.5 16.4A5 5 0 0 1 15.5 16.4M5 12.9A10 10 0 0 1 10.2 10.2M19 12.9 17 11.3M2 8.8A15 15 0 0 1 6.2 6.2M22 8.8A15 15 0 0 0 10.7 5.1M2 2 22 22"/></svg>`
        ).node);
    }
}
