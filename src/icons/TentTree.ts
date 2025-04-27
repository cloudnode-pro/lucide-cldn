import {Icon} from "../Icon.js";

export class TentTree extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="4" cy="4" r="2"/><path d="M14 5 17 2 20 5M14 10 17 7 20 10M17 14V2M17 14H7L2 22H22ZM8 14V22M9 14 14 22"/></svg>`
        ).node);
    }
}
