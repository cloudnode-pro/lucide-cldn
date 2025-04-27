import {Icon} from "../Icon.js";

export class Soup extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21A9 9 0 0 0 21 12H3A9 9 0 0 0 12 21M7 21H17M19.5 12 22 6M16.3 3Q16.8 3.1 17 4.4C17 5.2 16 5.6 16 6.4Q16 7.5 16.7 8M11.3 3C11.5 3.1 12 3.5 12 4.4S11 5.6 11 6.4Q11 7.5 11.7 8M6.3 3C6.5 3.1 7 3.5 7 4.4S6 5.6 6 6.4Q6 7.5 6.7 8"/></svg>`
        ).node);
    }
}
