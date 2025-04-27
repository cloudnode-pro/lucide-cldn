import {Icon} from "../Icon.js";

export class Shrub extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22V15L10 13"/><path d="M17 8V8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8 5 5 0 0 1 17 8M14 14 12 16"/></svg>`
        ).node);
    }
}
