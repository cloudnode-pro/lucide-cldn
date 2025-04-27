import {Icon} from "../Icon.js";

export class Plug2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 2V8M15 2V8M12 17V22M5 8H19M6 11V8H18V11A6 6 0 1 1 6 11"/></svg>`
        ).node);
    }
}
