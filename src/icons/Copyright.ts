import {Icon} from "../Icon.js";

export class Copyright extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M14.8 14.8A4 4 0 1 1 14.8 9.2"/></svg>`
        ).node);
    }
}
