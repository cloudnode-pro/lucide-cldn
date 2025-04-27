import {Icon} from "../Icon.js";

export class PersonStanding extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1"/><path d="M9 20 12 14 15 20M6 8 12 10 18 8M12 10V14"/></svg>`
        ).node);
    }
}
