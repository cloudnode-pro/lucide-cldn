import {Icon} from "../Icon.js";

export class Scaling extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V12"/><path d="M14 15H9V10M16 3H21V8M21 3 9 15"/></svg>`
        ).node);
    }
}
