import {Icon} from "../Icon.js";

export class RotateCcwSquare extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 9V7A2 2 0 0 0 18 5H12"/><path d="M15 2 12 5 15 8M20 13V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18V7A2 2 0 0 1 6 5H8"/></svg>`
        ).node);
    }
}
