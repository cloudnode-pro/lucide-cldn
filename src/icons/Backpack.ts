import {Icon} from "../Icon.js";

export class Backpack extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 10A4 4 0 0 1 8 6H16A4 4 0 0 1 20 10V20A2 2 0 0 1 18 22H6A2 2 0 0 1 4 20zM8 10H16M8 18H16"/><path d="M8 22V16A2 2 0 0 1 10 14H14A2 2 0 0 1 16 16V22M9 6V4A2 2 0 0 1 11 2H13A2 2 0 0 1 15 4V6"/></svg>`
        ).node);
    }
}
