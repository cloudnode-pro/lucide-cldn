import {Icon} from "../Icon.js";

export class CloudAlert extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12V16M17 18H17.5A1 1 0 0 0 17.5 9H15.7A7 7 0 1 0 7 17.7"/></svg>`
        ).node);
    }
}
