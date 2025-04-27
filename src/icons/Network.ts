import {Icon} from "../Icon.js";

export class Network extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="6" x="16" y="16" rx="1"/><rect width="6" height="6" x="2" y="16" rx="1"/><rect width="6" height="6" x="9" y="2" rx="1"/><path d="M5 16V13A1 1 0 0 1 6 12H18A1 1 0 0 1 19 13V16M12 12V8"/></svg>`
        ).node);
    }
}
