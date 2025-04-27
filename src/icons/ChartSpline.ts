import {Icon} from "../Icon.js";

export class ChartSpline extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3V19A2 2 0 0 0 5 21H21"/><path d="M7 16C7.5 14 8.5 9 11 9 13 9 13 12 15 12 17.5 12 19.5 7 20 5"/></svg>`
        ).node);
    }
}
