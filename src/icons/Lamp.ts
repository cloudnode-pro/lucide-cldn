import {Icon} from "../Icon.js";

export class Lamp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12V18M4 10.6A1 1 0 0 0 5 12H19A1 1 0 0 0 20 10.6L16.7 3.2A2 2 0 0 0 15 2H9A2 2 0 0 0 7.2 3.2ZM8 20A2 2 0 0 1 10 18H14A2 2 0 0 1 16 20V21A1 1 0 0 1 15 22H9A1 1 0 0 1 8 21z"/></svg>`
        ).node);
    }
}
