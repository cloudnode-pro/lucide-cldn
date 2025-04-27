import {Icon} from "../Icon.js";

export class MessageSquareDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 17H7L3 21V14M14 17H15M14 3H15M19 3A2 2 0 0 1 21 5M21 14V15A2 2 0 0 1 19 17M21 9V10M3 9V10M5 3A2 2 0 0 0 3 5M9 3H10"/></svg>`
        ).node);
    }
}
