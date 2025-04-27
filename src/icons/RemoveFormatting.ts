import {Icon} from "../Icon.js";

export class RemoveFormatting extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7V4H20V7M5 20H11M13 4 8 20M15 15 20 20M20 15 15 20"/></svg>`
        ).node);
    }
}
