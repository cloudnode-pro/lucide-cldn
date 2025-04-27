import {Icon} from "../Icon.js";

export class Regex extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 3V13M12.7 5.5 21.3 10.5M12.7 10.5 21.3 5.5M9 17A2 2 0 0 0 7 15H5A2 2 0 0 0 3 17V19A2 2 0 0 0 5 21H7A2 2 0 0 0 9 19z"/></svg>`
        ).node);
    }
}
