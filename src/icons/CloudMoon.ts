import {Icon} from "../Icon.js";

export class CloudMoon extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.2 8.5A6 6 0 0 1 16 4 1 1 0 0 0 22 10 6 6 0 0 1 19 15.2M13 16A3 3 0 1 1 13 22H7A5 5 0 1 1 11.9 16Z"/></svg>`
        ).node);
    }
}
