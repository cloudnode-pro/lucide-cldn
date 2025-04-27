import {Icon} from "../Icon.js";

export class SearchSlash extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.5 8.5 8.5 13.5"/><circle cx="11" cy="11" r="8"/><path d="M21 21 16.7 16.7"/></svg>`
        ).node);
    }
}
