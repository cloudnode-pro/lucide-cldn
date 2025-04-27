import {Icon} from "../Icon.js";

export class Ghost extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2A8 8 0 0 0 4 10V22L7 19 9.5 21.5 12 19 14.5 21.5 17 19 20 22V10A8 8 0 0 0 12 2"/></svg>`
        ).node);
    }
}
