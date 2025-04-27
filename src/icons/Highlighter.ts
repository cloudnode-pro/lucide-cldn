import {Icon} from "../Icon.js";

export class Highlighter extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 11 3 17V20H12L15 17"/><path d="M22 12 17.4 16.6A2 2 0 0 1 14.6 16.6L9.4 11.4A2 2 0 0 1 9.4 8.6L14 4"/></svg>`
        ).node);
    }
}
