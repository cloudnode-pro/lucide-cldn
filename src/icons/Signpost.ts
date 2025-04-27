import {Icon} from "../Icon.js";

export class Signpost extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V21M12 3V6M18 6A2 2 0 0 1 19.4 6.6L21.7 8.8A1 1 0 0 1 21.7 10.2L19.4 12.4A2 2 0 0 1 18 13H6A2 2 0 0 1 4.6 12.4L2.3 10.2A1 1 0 0 1 2.3 8.8L4.6 6.6A2 2 0 0 1 6 6z"/></svg>`
        ).node);
    }
}
