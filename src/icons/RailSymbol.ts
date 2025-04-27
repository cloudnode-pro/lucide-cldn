import {Icon} from "../Icon.js";

export class RailSymbol extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 15H19M5 9H19M14 20 9 15 15 9 10 4"/></svg>`
        ).node);
    }
}
