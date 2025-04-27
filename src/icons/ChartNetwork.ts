import {Icon} from "../Icon.js";

export class ChartNetwork extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.1 7.7 15 10.3M14.2 12.8 10.8 14.2M20 4 14 5.5M3 3V19A2 2 0 0 0 5 21H21"/><circle cx="12" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="9" cy="15" r="2"/></svg>`
        ).node);
    }
}
