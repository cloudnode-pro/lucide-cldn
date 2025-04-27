import {Icon} from "../Icon.js";

export class MonitorStop extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17V21M8 21H16"/><rect width="20" height="14" x="2" y="3" rx="2"/><rect width="6" height="6" x="9" y="7" rx="1"/></svg>`
        ).node);
    }
}
