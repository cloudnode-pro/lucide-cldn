import {Icon} from "../Icon.js";

export class Cog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20A8 8 0 1 0 12 4 8 8 0 0 0 12 20"/><path d="M12 14A2 2 0 1 0 12 10 2 2 0 0 0 12 14M12 2V4M12 22V20M17 20.7 16 18.9M11 10.3 7 3.3M20.7 17 18.9 16M3.3 7 5.1 8M14 12H22M2 12H4M20.7 7 18.9 8M3.3 17 5.1 16M17 3.3 16 5.1M11 13.7 7 20.7"/></svg>`
        ).node);
    }
}
