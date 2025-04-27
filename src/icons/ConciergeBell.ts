import {Icon} from "../Icon.js";

export class ConciergeBell extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 20A1 1 0 0 1 2 19V18A2 2 0 0 1 4 16H20A2 2 0 0 1 22 18V19A1 1 0 0 1 21 20ZM20 16A8 8 0 1 0 4 16M12 4V8M10 4H14"/></svg>`
        ).node);
    }
}
