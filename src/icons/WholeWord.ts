import {Icon} from "../Icon.js";

export class WholeWord extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="7" cy="12" r="3"/><path d="M10 9V15"/><circle cx="17" cy="12" r="3"/><path d="M14 7V15M22 17V18Q21.9 18.9 21 19H3A1 1 0 0 1 2 18V17"/></svg>`
        ).node);
    }
}
