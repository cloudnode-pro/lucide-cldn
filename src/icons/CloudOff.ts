import {Icon} from "../Icon.js";

export class CloudOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 2 22 22M5.8 5.8A7 7 0 0 0 9 19H17.5L18.8 18.8M21.5 16.5A4.5 4.5 0 0 0 17.5 10H15.7A7 7 0 0 0 10 5"/></svg>`
        ).node);
    }
}
