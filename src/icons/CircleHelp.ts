import {Icon} from "../Icon.js";

export class CircleHelp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 9A3 3 0 0 1 15 10C15 12 12 13 12 13M12 17"/></svg>`
        ).node);
    }
}
