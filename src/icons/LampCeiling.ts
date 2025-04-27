import {Icon} from "../Icon.js";

export class LampCeiling extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V7M14.8 16A3 3 0 1 1 9.2 16"/><path d="M21 14.6A1 1 0 0 1 20 16H4A1 1 0 0 1 3 14.6L6 7.6A1 1 0 0 1 7 7H17A1 1 0 0 1 18 7.6z"/></svg>`
        ).node);
    }
}
