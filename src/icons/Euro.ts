import {Icon} from "../Icon.js";

export class Euro extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 10H16M4 14H13M19 6A8 8 0 0 0 13.8 4 8 8 0 0 0 6 12 8 8 0 0 0 13.8 20 8 8 0 0 0 19 18"/></svg>`
        ).node);
    }
}
