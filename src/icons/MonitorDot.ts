import {Icon} from "../Icon.js";

export class MonitorDot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="19" cy="6" r="3"/><path d="M22 12V15A2 2 0 0 1 20 17H4A2 2 0 0 1 2 15V5A2 2 0 0 1 4 3H13M12 17V21M8 21H16"/></svg>`
        ).node);
    }
}
