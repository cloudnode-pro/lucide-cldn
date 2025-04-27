import {Icon} from "../Icon.js";

export class GitGraph extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="5" cy="6" r="3"/><path d="M5 9V15"/><circle cx="5" cy="18" r="3"/><path d="M12 3V21"/><circle cx="19" cy="6" r="3"/><path d="M16 15.7A9 9 0 0 0 19 9"/></svg>`
        ).node);
    }
}
