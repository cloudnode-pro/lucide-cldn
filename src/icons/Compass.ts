import {Icon} from "../Icon.js";

export class Compass extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.2 7.8 14.4 13.2A2 2 0 0 1 13.2 14.4L7.8 16.2 9.6 10.8A2 2 0 0 1 10.8 9.6z"/><circle cx="12" cy="12" r="10"/></svg>`
        ).node);
    }
}
