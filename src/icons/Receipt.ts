import {Icon} from "../Icon.js";

export class Receipt extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2V22L6 21 8 22 10 21 12 22 14 21 16 22 18 21 20 22V2L18 3 16 2 14 3 12 2 10 3 8 2 6 3Z"/><path d="M16 8H10A2 2 0 1 0 10 12H14A2 2 0 1 1 14 16H8M12 17.5V6.5"/></svg>`
        ).node);
    }
}
