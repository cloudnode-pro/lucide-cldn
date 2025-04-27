import {Icon} from "../Icon.js";

export class Route extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"/><path d="M9 19H17.5A3.5 3.5 0 0 0 17.5 12H6.5A3.5 3.5 0 0 1 6.5 5H15"/><circle cx="18" cy="5" r="3"/></svg>`
        ).node);
    }
}
