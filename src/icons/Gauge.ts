import {Icon} from "../Icon.js";

export class Gauge extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 14 16 10M3.3 19A10 10 0 1 1 20.7 19"/></svg>`
        ).node);
    }
}
