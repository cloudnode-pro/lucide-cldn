import {Icon} from "../Icon.js";

export class ArrowLeft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 19 5 12 12 5M19 12H5"/></svg>`
        ).node);
    }
}
