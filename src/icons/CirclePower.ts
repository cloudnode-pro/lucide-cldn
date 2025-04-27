import {Icon} from "../Icon.js";

export class CirclePower extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 7V11M8 9A5 5 0 1 0 16 9"/><circle cx="12" cy="12" r="10"/></svg>`
        ).node);
    }
}
