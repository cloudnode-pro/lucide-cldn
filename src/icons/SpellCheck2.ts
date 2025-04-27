import {Icon} from "../Icon.js";

export class SpellCheck2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 16 12 4 18 16M8 12H16M4 21C5.1 21 5.1 20 6.3 20S7.4 21 8.6 21 9.7 20 10.9 20 12 21 13.2 21 14.3 20 15.5 20 16.6 21 17.8 21 18.9 20 20.1 20"/></svg>`
        ).node);
    }
}
