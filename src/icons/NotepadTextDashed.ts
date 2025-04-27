import {Icon} from "../Icon.js";

export class NotepadTextDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2V6M12 2V6M16 2V6M16 4H18A2 2 0 0 1 20 6V8M20 12V14M20 18V20A2 2 0 0 1 18 22H17M13 22H11M7 22H6A2 2 0 0 1 4 20V18M4 14V12M4 8V6A2 2 0 0 1 6 4H8M8 10H14M8 14H16M8 18H13"/></svg>`
        ).node);
    }
}
