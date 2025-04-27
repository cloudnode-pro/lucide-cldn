import {Icon} from "../Icon.js";

export class MessageSquareOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15V5A2 2 0 0 0 19 3H9M2 2 22 22M3.6 3.6Q3 4.1 3 5V21L7 17H17"/></svg>`
        ).node);
    }
}
