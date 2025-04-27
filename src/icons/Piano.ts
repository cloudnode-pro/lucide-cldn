import {Icon} from "../Icon.js";

export class Piano extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.5 8Q16.3 7.9 15.3 6A6.9 6.9 0 0 0 2 9V20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20V11.5C22 9.6 20.4 8 18.5 8M2 14H22M6 14V18M10 14V18M14 14V18M18 14V18"/></svg>`
        ).node);
    }
}
