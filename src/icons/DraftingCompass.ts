import {Icon} from "../Icon.js";

export class DraftingCompass extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 6.7 15 10.2M19.1 12A10 10 0 0 1 5 12M21 21 18.8 17.2M3 21 11 6.7"/><circle cx="12" cy="5" r="2"/></svg>`
        ).node);
    }
}
