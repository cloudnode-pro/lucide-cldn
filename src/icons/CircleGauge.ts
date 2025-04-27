import {Icon} from "../Icon.js";

export class CircleGauge extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.6 2.7A10 10 0 1 0 21.3 8.4"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6 19 5"/></svg>`
        ).node);
    }
}
