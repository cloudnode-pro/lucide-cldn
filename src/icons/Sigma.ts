import {Icon} from "../Icon.js";

export class Sigma extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 7V5A1 1 0 0 0 17 4H6.5A.5.5 0 0 0 6.1 4.8L10.6 10.8A2 2 0 0 1 10.6 13.2L6.1 19.2A.5.5 0 0 0 6.5 20H17A1 1 0 0 0 18 19V17"/></svg>`
        ).node);
    }
}
