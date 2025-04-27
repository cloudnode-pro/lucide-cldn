import {Icon} from "../Icon.js";

export class CaseLower extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="7" cy="12" r="3"/><path d="M10 9V15"/><circle cx="17" cy="12" r="3"/><path d="M14 7V15"/></svg>`
        ).node);
    }
}
