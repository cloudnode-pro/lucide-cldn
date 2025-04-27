import {Icon} from "../Icon.js";

export class MessageSquareDiff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 19 3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V15A2 2 0 0 1 19 17M9 10H15M12 7V13M9 17H15"/></svg>`
        ).node);
    }
}
