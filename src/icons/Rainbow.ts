import {Icon} from "../Icon.js";

export class Rainbow extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17A10 10 0 0 0 2 17"/><path d="M6 17A6 6 0 0 1 18 17"/><path d="M10 17A2 2 0 0 1 14 17"/></svg>`
        ).node);
    }
}
