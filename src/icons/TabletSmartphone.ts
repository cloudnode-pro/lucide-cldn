import {Icon} from "../Icon.js";

export class TabletSmartphone extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4A2 2 0 0 1 7 2H19A2 2 0 0 1 21 4V20A2 2 0 0 1 19 22H16.6M8 18"/></svg>`
        ).node);
    }
}
