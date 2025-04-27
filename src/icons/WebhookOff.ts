import {Icon} from "../Icon.js";

export class WebhookOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17H12C11 17 10 18 9.5 18.9A3 3 0 1 1 2.5 15M9 3.4A4 4 0 0 1 15.5 4.1"/><path d="M6 17 9.1 11.2A3 3 0 0 0 9.1 9.2M20.3 20.3A4 4 0 0 1 18 21M18.6 13A4 4 0 0 1 22 16.4M12 6 12.6 7M2 2 22 22"/></svg>`
        ).node);
    }
}
