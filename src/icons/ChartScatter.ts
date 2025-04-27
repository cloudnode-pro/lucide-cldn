import {Icon} from "../Icon.js";

export class ChartScatter extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="7.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="18.5" cy="5.5" r="0.5" fill="currentColor"/><circle cx="11.5" cy="11.5" r="0.5" fill="currentColor"/><circle cx="7.5" cy="16.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="14.5" r="0.5" fill="currentColor"/><path d="M3 3V19A2 2 0 0 0 5 21H21"/></svg>`
        ).node);
    }
}
