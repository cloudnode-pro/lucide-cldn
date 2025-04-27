import {Icon} from "../Icon.js";

export class Merge extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 6 12 2 16 6"/><path d="M12 2V12.3A4 4 0 0 1 10.8 15.2L4 22M20 22 15 17"/></svg>`
        ).node);
    }
}
