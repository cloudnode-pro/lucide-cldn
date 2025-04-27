import {Icon} from "../Icon.js";

export class NotepadText extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2V6M12 2V6M16 2V6"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10H14M8 14H16M8 18H13"/></svg>`
        ).node);
    }
}
