import {Icon} from "../Icon.js";

export class Rabbit extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16A3 3 0 0 1 15.2 21M18 12"/><path d="M18 21H10A4 4 0 0 1 6 17 7 7 0 0 1 13 10H13.2L9.6 6.4A1 1 0 1 1 12.4 3.6L15.8 7H16A6 6 0 0 1 22 13V14A2 2 0 0 1 20 16H19A3 3 0 0 0 16 19"/><path d="M20 8.5V4A2 2 0 1 0 16 4V7M7.6 12.5A3 3 0 1 0 6 16.8"/></svg>`
        ).node);
    }
}
