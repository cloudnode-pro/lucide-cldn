import {Icon} from "../Icon.js";

export class Slice extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 16.6V19A1 1 0 0 1 10 20H2L18.4 3.6A1 1 0 1 1 21.4 6.6L11.7 16.3A1 1 0 0 1 10.3 16.3L8 14"/></svg>`
        ).node);
    }
}
