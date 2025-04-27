import {Icon} from "../Icon.js";

export class SaudiRiyal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 19.5 14.5 20.7M14.5 4V15.2A1 1 0 0 0 15.7 16.2L20 15.2M3 19.4 8.5 18A2 2 0 0 0 10 16V2M20 10 4 13.5"/></svg>`
        ).node);
    }
}
