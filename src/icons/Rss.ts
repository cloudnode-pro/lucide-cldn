import {Icon} from "../Icon.js";

export class Rss extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 11A9 9 0 0 1 13 20M4 4A16 16 0 0 1 20 20"/><circle cx="5" cy="19" r="1"/></svg>`
        ).node);
    }
}
