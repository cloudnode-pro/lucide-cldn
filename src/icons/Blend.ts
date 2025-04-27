import {Icon} from "../Icon.js";

export class Blend extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="9" r="7"/><circle cx="15" cy="15" r="7"/></svg>`
        ).node);
    }
}
