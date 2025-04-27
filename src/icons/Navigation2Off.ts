import {Icon} from "../Icon.js";

export class Navigation2Off extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9.3 9.3 5 21 12 17 19 21 17.8 17.8M14.5 8.9 12 2 10.8 5.2"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}
