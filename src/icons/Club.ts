import {Icon} from "../Icon.js";

export class Club extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.3 9A5.5 5.5 0 1 0 6.7 9 5.5 5.5 0 1 0 12 17.8 5.5 5.5 0 1 0 17.3 9M12 17.7V22"/></svg>`
        ).node);
    }
}
