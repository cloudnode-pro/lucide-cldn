import {Icon} from "../Icon.js";

export class IceCreamBowl extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17C17 17 20 14.3 20 11H4C4 14.3 7 17 12 17M8 21H16M12 18V21M5.1 11A3.5 3.5 0 1 1 12 11"/><path d="M12.1 11A3.5 3.5 0 1 1 19 11M15.5 6.5A3.5 3.5 0 1 0 8.5 6.5"/></svg>`
        ).node);
    }
}
