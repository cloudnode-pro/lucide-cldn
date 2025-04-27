import {Icon} from "../Icon.js";

export class IterationCcw extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10C20 5.6 16.4 2 12 2S4 5.6 4 10 7.6 18 12 18H20"/><polyline points="16 14 20 18 16 22"/></svg>`
        ).node);
    }
}
