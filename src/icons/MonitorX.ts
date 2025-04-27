import {Icon} from "../Icon.js";

export class MonitorX extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 12.5 9.5 7.5M9.5 12.5 14.5 7.5"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17V21M8 21H16"/></svg>`
        ).node);
    }
}
