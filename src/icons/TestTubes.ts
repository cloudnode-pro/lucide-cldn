import {Icon} from "../Icon.js";

export class TestTubes extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 2V19.5A2.5 2.5 0 0 1 6.5 22 2.5 2.5 0 0 1 4 19.5V2M20 2V19.5A2.5 2.5 0 0 1 17.5 22 2.5 2.5 0 0 1 15 19.5V2M3 2H10M14 2H21M9 16H4M20 16H15"/></svg>`
        ).node);
    }
}
