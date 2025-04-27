import {Icon} from "../Icon.js";

export class Forklift extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12H5A2 2 0 0 0 3 14V19"/><circle cx="13" cy="19" r="2"/><circle cx="5" cy="19" r="2"/><path d="M8 19H11M16 2V19H22M6 12V7Q6.2 5.2 8 5H11L16 10"/></svg>`
        ).node);
    }
}
