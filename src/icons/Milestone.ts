import {Icon} from "../Icon.js";

export class Milestone extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V21M12 3V6M4 6A1 1 0 0 0 3 7V12A1 1 0 0 0 4 13H17A2 2 0 0 0 18.2 12.6L21.6 10.3A1 1 0 0 0 21.6 8.7L18.2 6.4A2 2 0 0 0 17 6z"/></svg>`
        ).node);
    }
}
