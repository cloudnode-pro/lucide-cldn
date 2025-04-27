import {Icon} from "../Icon.js";

export class CircleArrowLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 12H8M12 8 8 12 12 16"/></svg>`
        ).node);
    }
}
