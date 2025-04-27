import {Icon} from "../Icon.js";

export class Bean extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.2 6.6A5 5 0 0 1 9 9 5 5 0 0 1 6.6 10.2 6 6 0 0 0 8 22 14 14 0 0 0 22 8 6 6 0 0 0 10.2 6.6"/><path d="M5.3 10.6A4 4 0 1 0 10.6 5.3"/></svg>`
        ).node);
    }
}
