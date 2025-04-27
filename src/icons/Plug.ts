import {Icon} from "../Icon.js";

export class Plug extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22V17M9 8V2M15 8V2M18 8V13A4 4 0 0 1 14 17H10A4 4 0 0 1 6 13V8Z"/></svg>`
        ).node);
    }
}
