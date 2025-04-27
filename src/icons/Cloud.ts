import {Icon} from "../Icon.js";

export class Cloud extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 19H9A7 7 0 1 1 15.7 10H17.5A4.5 4.5 0 1 1 17.5 19"/></svg>`
        ).node);
    }
}
