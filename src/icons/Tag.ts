import {Icon} from "../Icon.js";

export class Tag extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.6 2.6A2 2 0 0 0 11.2 2H4A2 2 0 0 0 2 4V11.2A2 2 0 0 0 2.6 12.6L11.3 21.3A2.4 2.4 0 0 0 14.7 21.3L21.3 14.7A2.4 2.4 0 0 0 21.3 11.3z"/><circle cx="7.5" cy="7.5" r="0.5" fill="currentColor"/></svg>`
        ).node);
    }
}
