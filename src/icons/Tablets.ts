import {Icon} from "../Icon.js";

export class Tablets extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="7" cy="7" r="5"/><circle cx="17" cy="17" r="5"/><path d="M12 17H22M3.5 10.5 10.5 3.5"/></svg>`
        ).node);
    }
}
