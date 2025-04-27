import {Icon} from "../Icon.js";

export class CloudRain extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 14.9A7 7 0 1 1 15.7 8H17.5A4.5 4.5 0 0 1 20 16.2M16 14V20M8 14V20M12 16V22"/></svg>`
        ).node);
    }
}
