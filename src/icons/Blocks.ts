import {Icon} from "../Icon.js";

export class Blocks extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8A1 1 0 0 0 9 7H4A1 1 0 0 0 3 8V20A1 1 0 0 0 4 21H16A1 1 0 0 0 17 20V15A1 1 0 0 0 16 14H3"/></svg>`
        ).node);
    }
}
