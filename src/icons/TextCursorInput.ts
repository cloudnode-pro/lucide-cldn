import {Icon} from "../Icon.js";

export class TextCursorInput extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20H11A2 2 0 0 1 9 18 2 2 0 0 1 7 20H6M13 8H20A2 2 0 0 1 22 10V14A2 2 0 0 1 20 16H13M5 16H4A2 2 0 0 1 2 14V10A2 2 0 0 1 4 8H5M6 4H7A2 2 0 0 1 9 6 2 2 0 0 1 11 4H12M9 6V18"/></svg>`
        ).node);
    }
}
