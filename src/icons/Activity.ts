import {Icon} from "../Icon.js";

export class Activity extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12H19.5A2 2 0 0 0 17.5 13.5L15.3 21.8H14.8L9.2 2.2H8.8L6.4 10.5A2 2 0 0 1 4.4 12H2"/></svg>`
        ).node);
    }
}
