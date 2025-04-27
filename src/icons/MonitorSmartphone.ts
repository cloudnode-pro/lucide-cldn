import {Icon} from "../Icon.js";

export class MonitorSmartphone extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8V6A2 2 0 0 0 16 4H4A2 2 0 0 0 2 6V13A2 2 0 0 0 4 15H12M10 19V15 18.2M7 19H12"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg>`
        ).node);
    }
}
