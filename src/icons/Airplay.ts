import {Icon} from "../Icon.js";

export class Airplay extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 17H4A2 2 0 0 1 2 15V5A2 2 0 0 1 4 3H20A2 2 0 0 1 22 5V15A2 2 0 0 1 20 17H19"/><path d="M12 15 17 21H7Z"/></svg>`
        ).node);
    }
}
