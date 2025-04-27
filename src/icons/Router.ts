import {Icon} from "../Icon.js";

export class Router extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M15 10V14M17.8 7.2A4 4 0 0 0 12.2 7.2M20.7 4.3A8 8 0 0 0 9.4 4.3"/></svg>`
        ).node);
    }
}
