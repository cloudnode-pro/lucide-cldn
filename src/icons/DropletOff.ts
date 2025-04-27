import {Icon} from "../Icon.js";

export class DropletOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.7 13.2A8 8 0 0 0 16 9.5Q12.9 6.9 12 3L11.1 5.6M2 2 22 22M8.8 8.8 8 9.5Q5 11.9 5 15A7 7 0 0 0 18.2 18.2"/></svg>`
        ).node);
    }
}
