import {Icon} from "../Icon.js";

export class Globe extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2A14.5 14.5 0 0 0 12 22 14.5 14.5 0 0 0 12 2M2 12H22"/></svg>`
        ).node);
    }
}
