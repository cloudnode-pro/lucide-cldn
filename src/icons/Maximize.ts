import {Icon} from "../Icon.js";

export class Maximize extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3H5A2 2 0 0 0 3 5V8M21 8V5A2 2 0 0 0 19 3H16M3 16V19A2 2 0 0 0 5 21H8M16 21H19A2 2 0 0 0 21 19V16"/></svg>`
        ).node);
    }
}
