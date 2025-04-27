import {Icon} from "../Icon.js";

export class ReceiptText extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2V22L6 21 8 22 10 21 12 22 14 21 16 22 18 21 20 22V2L18 3 16 2 14 3 12 2 10 3 8 2 6 3ZM14 8H8M16 12H8M13 16H8"/></svg>`
        ).node);
    }
}
