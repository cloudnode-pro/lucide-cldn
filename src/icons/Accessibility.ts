import {Icon} from "../Icon.js";

export class Accessibility extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="16" cy="4" r="1"/><path d="M18 19 19 12 13 13M5 8 8 5 13.5 8 11.1 11.5M4.2 14.5A5 5 0 0 0 11.2 20.5"/><path d="M13.8 17.5A5 5 0 0 0 6.8 11.5"/></svg>`
        ).node);
    }
}
