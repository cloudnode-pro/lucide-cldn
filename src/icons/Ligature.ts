import {Icon} from "../Icon.js";

export class Ligature extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 20V8A4 4 0 0 1 15.5 6M6 12H10M14 12H16V20M6 20H10M14 20H18"/></svg>`
        ).node);
    }
}
