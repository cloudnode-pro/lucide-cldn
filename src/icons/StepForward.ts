import {Icon} from "../Icon.js";

export class StepForward extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="6" x2="6" y1="4" y2="20"/><polygon points="10 4 20 12 10 20"/></svg>`
        ).node);
    }
}
