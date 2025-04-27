import {Icon} from "../Icon.js";

export class Tickets extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.5 8 15.1 3A1 1 0 0 1 16.4 3.3L18.5 8M6 10V8M6 14V15M6 19V21"/><rect width="20" height="13" x="2" y="8" rx="2"/></svg>`
        ).node);
    }
}
