import {Icon} from "../Icon.js";

export class RouteOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"/><path d="M9 19H17.5L18.8 18.8M5.2 5.2A3.5 3.5 0 0 0 6.5 12H12M2 2 22 22M21 15.3A3.5 3.5 0 0 0 17.7 12M15 5H10.7"/><circle cx="18" cy="5" r="3"/></svg>`
        ).node);
    }
}
