import {Icon} from "../Icon.js";

export class FireExtinguisher extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 6.5V3A1 1 0 0 0 14 2H12A1 1 0 0 0 11 3V6.5M9 18H17M18 3H15"/><path d="M11 3A6 6 0 0 0 5 9V20M5 13H9M17 10A4 4 0 0 0 9 10V20A2 2 0 0 0 11 22H15A2 2 0 0 0 17 20Z"/></svg>`
        ).node);
    }
}
