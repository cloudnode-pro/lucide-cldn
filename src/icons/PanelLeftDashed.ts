import {Icon} from "../Icon.js";

export class PanelLeftDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14V15M9 19V21M9 3V5M9 9V10"/></svg>`
        ).node);
    }
}
