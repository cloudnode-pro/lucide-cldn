import {Icon} from "../Icon.js";

export class Squircle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3C19.2 3 21 4.8 21 12S19.2 21 12 21 3 19.2 3 12 4.8 3 12 3"/></svg>`
        ).node);
    }
}
