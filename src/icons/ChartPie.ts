import {Icon} from "../Icon.js";

export class ChartPie extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12Q22 12 22 11A10 10 0 0 0 13 2Q12 2 12 3V11A1 1 0 0 0 13 12z"/><path d="M21.2 15.9A10 10 0 1 1 8 2.9"/></svg>`
        ).node);
    }
}
