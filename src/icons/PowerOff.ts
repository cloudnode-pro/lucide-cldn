import {Icon} from "../Icon.js";

export class PowerOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.4 6.6A9 9 0 0 1 20.8 15M6.2 6.2A9 9 0 1 0 18.8 18.8M12 2V6M2 2 22 22"/></svg>`
        ).node);
    }
}
