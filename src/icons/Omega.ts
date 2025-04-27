import {Icon} from "../Icon.js";

export class Omega extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 20H7.5L8 19.5V19.2L7.8 18.8A8 8 0 1 1 16.2 18.8L16 19.2V19.5L16.5 20H21"/></svg>`
        ).node);
    }
}
