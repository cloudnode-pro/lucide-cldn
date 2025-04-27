import {Icon} from "../Icon.js";

export class Moon extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3A6 6 0 0 0 21 12 9 9 0 1 1 12 3"/></svg>`
        ).node);
    }
}
