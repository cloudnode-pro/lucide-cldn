import {Icon} from "../Icon.js";

export class MessageSquareDot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.7 3H5A2 2 0 0 0 3 5V21L7 17H19A2 2 0 0 0 21 15V12.3"/><circle cx="18" cy="6" r="3"/></svg>`
        ).node);
    }
}
