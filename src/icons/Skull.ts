import {Icon} from "../Icon.js";

export class Skull extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.5 17 12 16 11.5 17z"/><path d="M15 22A1 1 0 0 0 16 21V20A2 2 0 0 0 17.6 16.8 8 8 0 1 0 6.4 16.8 2 2 0 0 0 8 20V21A1 1 0 0 0 9 22z"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="12" r="1"/></svg>`
        ).node);
    }
}
