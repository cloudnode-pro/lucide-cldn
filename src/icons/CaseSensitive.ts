import {Icon} from "../Icon.js";

export class CaseSensitive extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 15 7 7 11 15M4 13H10"/><circle cx="18" cy="12" r="3"/><path d="M21 9V15"/></svg>`
        ).node);
    }
}
