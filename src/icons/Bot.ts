import {Icon} from "../Icon.js";

export class Bot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14H4M20 14H22M15 13V15M9 13V15"/></svg>`
        ).node);
    }
}
