import {Icon} from "../Icon.js";

export class SmartphoneCharging extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12.7 8 10 12H14L11.3 16"/></svg>`
        ).node);
    }
}
