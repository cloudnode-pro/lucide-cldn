import {Icon} from "../Icon.js";

export class Anvil extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 10H6A4 4 0 0 1 2 6 1 1 0 0 1 3 5H7M7 5A1 1 0 0 1 8 4H21A1 1 0 0 1 22 5 7 7 0 0 1 15 12H8A1 1 0 0 1 7 11zM9 12V17M15 12V17M5 20A3 3 0 0 1 8 17H16A3 3 0 0 1 19 20 1 1 0 0 1 18 21H6A1 1 0 0 1 5 20"/></svg>`
        ).node);
    }
}
