import {Icon} from "../Icon.js";

export class MouseOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6V6.3M18.2 18.2A7 7 0 0 1 5 15V9A7 7 0 0 1 5.8 5.8M19 13.3V9A7 7 0 0 0 8.6 2.9M22 22 2 2"/></svg>`
        ).node);
    }
}
