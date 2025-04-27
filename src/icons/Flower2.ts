import {Icon} from "../Icon.js";

export class Flower2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5A3 3 0 1 1 15 8M12 5A3 3 0 1 0 9 8M12 5V6M9 8A3 3 0 1 0 12 11M9 8H10M15 8A3 3 0 1 1 12 11M15 8H14M12 11V10"/><circle cx="12" cy="8" r="2"/><path d="M12 10V22M12 22C16.2 22 19 20.3 19 17 14.8 17 12 18.7 12 22M12 22C7.8 22 5 20.3 5 17 9.2 17 12 18.7 12 22"/></svg>`
        ).node);
    }
}
