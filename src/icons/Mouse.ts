import {Icon} from "../Icon.js";

export class Mouse extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="7"/><path d="M12 6V10"/></svg>`
        ).node);
    }
}
