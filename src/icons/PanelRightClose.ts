import {Icon} from "../Icon.js";

export class PanelRightClose extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3V21M8 9 11 12 8 15"/></svg>`
        ).node);
    }
}
