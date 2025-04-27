import {Icon} from "../Icon.js";

export class Braces extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3H7A2 2 0 0 0 5 5V10A2 2 0 0 1 3 12 2 2 0 0 1 5 14V19Q5.2 20.8 7 21H8M16 21H17A2 2 0 0 0 19 19V14Q19.2 12.2 21 12A2 2 0 0 1 19 10V5A2 2 0 0 0 17 3H16"/></svg>`
        ).node);
    }
}
