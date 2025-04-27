import {Icon} from "../Icon.js";

export class Weight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><path d="M6.5 8A2 2 0 0 0 4.5 9.5L2.2 18.5A2 2 0 0 0 4 21H20A2 2 0 0 0 22 18.5L19.3 9.5A2 2 0 0 0 17.4 8Z"/></svg>`
        ).node);
    }
}
