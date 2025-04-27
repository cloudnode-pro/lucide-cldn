import {Icon} from "../Icon.js";

export class TextSearch extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 6H3M10 12H3M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="M21 19 19.1 17.1"/></svg>`
        ).node);
    }
}
