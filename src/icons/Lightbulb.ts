import {Icon} from "../Icon.js";

export class Lightbulb extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 14Q15.3 12.6 16.5 11.5 18 10.1 18 8A6 6 0 0 0 6 8C6 9 6.2 10.2 7.5 11.5A5 5 0 0 1 9 14M9 18H15M10 22H14"/></svg>`
        ).node);
    }
}
