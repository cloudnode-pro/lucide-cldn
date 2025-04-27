import {Icon} from "../Icon.js";

export class SearchCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 11 10 13 14 9"/><circle cx="11" cy="11" r="8"/><path d="M21 21 16.7 16.7"/></svg>`
        ).node);
    }
}
