import {Icon} from "../Icon.js";

export class Hotel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 22V15.4M14 15.4V22M15 16A5 5 0 0 0 9 16M8 7"/><rect width="16" height="20" x="4" y="2" rx="2"/></svg>`
        ).node);
    }
}
