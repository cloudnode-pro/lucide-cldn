import {Icon} from "../Icon.js";

export class Pill extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 20.5 20.5 10.5A5 5 0 1 0 13.5 3.5L3.5 13.5A5 5 0 1 0 10.5 20.5M8.5 8.5 15.5 15.5"/></svg>`
        ).node);
    }
}
