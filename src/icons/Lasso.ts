import {Icon} from "../Icon.js";

export class Lasso extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 22A5 5 0 0 1 5 18M3.3 14A7 7 0 0 1 2 10C2 5.6 6.5 2 12 2S22 5.6 22 10 17.5 18 12 18A12 12 0 0 1 7 17"/><path d="M5 18A2 2 0 1 0 5 14 2 2 0 0 0 5 18"/></svg>`
        ).node);
    }
}
