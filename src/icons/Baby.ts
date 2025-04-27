import {Icon} from "../Icon.js";

export class Baby extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 16Q10.8 16.5 12 16.5C13.2 16.5 13.5 16.3 14 16M15 12"/><path d="M19.4 6.8A9 9 0 0 1 20.8 10.2 2 2 0 0 1 20.8 13.8 9 9 0 0 1 3.2 13.8 2 2 0 0 1 3.2 10.2 9 9 0 0 1 12 3C14 3 15.5 4.1 15.5 5.5S14.6 8 13.5 8Q12.1 8 12 7M9 12"/></svg>`
        ).node);
    }
}
