import {Icon} from "../Icon.js";

export class CircleOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 2 22 22M8.4 2.7A10 10 0 0 1 21.3 15.7M19 19A10 10 0 1 1 5 5"/></svg>`
        ).node);
    }
}
