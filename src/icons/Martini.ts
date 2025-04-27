import {Icon} from "../Icon.js";

export class Martini extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 22H16M12 11V22M19 3 12 11 5 3Z"/></svg>`
        ).node);
    }
}
