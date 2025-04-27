import {Icon} from "../Icon.js";

export class Waypoints extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="4.5" r="2.5"/><path d="M10.2 6.3 6.3 10.2"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12H17"/><circle cx="19.5" cy="12" r="2.5"/><path d="M13.8 17.7 17.7 13.8"/><circle cx="12" cy="19.5" r="2.5"/></svg>`
        ).node);
    }
}
