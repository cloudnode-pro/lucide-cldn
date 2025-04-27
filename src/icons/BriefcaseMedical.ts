import {Icon} from "../Icon.js";

export class BriefcaseMedical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 11V15M14 13H10M16 6V4A2 2 0 0 0 14 2H10A2 2 0 0 0 8 4V6M18 6V20M6 6V20"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`
        ).node);
    }
}
