import {Icon} from "../Icon.js";

export class Tags extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 5 21.3 11.3A2.4 2.4 0 0 1 21.3 14.7L17 19"/><path d="M9.6 5.6A2 2 0 0 0 8.2 5H3A1 1 0 0 0 2 6V11.2A2 2 0 0 0 2.6 12.6L8.3 18.3A2.4 2.4 0 0 0 11.7 18.3L15.3 14.7A2.4 2.4 0 0 0 15.3 11.3z"/><circle cx="6.5" cy="9.5" r="0.5" fill="currentColor"/></svg>`
        ).node);
    }
}
