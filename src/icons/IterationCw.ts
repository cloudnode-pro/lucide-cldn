import {Icon} from "../Icon.js";

export class IterationCw extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 10C4 5.6 7.6 2 12 2S20 5.6 20 10 16.4 18 12 18H4"/><polyline points="8 22 4 18 8 14"/></svg>`
        ).node);
    }
}
