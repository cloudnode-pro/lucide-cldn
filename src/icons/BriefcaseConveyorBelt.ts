import {Icon} from "../Icon.js";

export class BriefcaseConveyorBelt extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 20V22M14 20V22M18 20V22M21 20H3M6 20V22M8 16V4A2 2 0 0 1 10 2H14A2 2 0 0 1 16 4V16"/><rect width="16" height="10" x="4" y="6" rx="2"/></svg>`
        ).node);
    }
}
