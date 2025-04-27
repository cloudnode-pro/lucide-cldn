import {Icon} from "../Icon.js";

export class SearchCode extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 13.5 15 11 13 8.5M21 21 16.7 16.7M9 8.5 7 11 9 13.5"/><circle cx="11" cy="11" r="8"/></svg>`
        ).node);
    }
}
