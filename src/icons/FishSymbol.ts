import {Icon} from "../Icon.js";

export class FishSymbol extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 16S11 1 22 12C11 23 2 8 2 8"/></svg>`
        ).node);
    }
}
