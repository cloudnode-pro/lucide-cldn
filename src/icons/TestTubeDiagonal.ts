import {Icon} from "../Icon.js";

export class TestTubeDiagonal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 7 6.8 21.2A3 3 0 0 1 2.8 21.2 3 3 0 0 1 2.8 17.2L17 3M16 2 22 8M12 16H4"/></svg>`
        ).node);
    }
}
