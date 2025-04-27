import {Icon} from "../Icon.js";

export class ReceiptJapaneseYen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2V22L6 21 8 22 10 21 12 22 14 21 16 22 18 21 20 22V2L18 3 16 2 14 3 12 2 10 3 8 2 6 3ZM12 10 15 7"/><path d="M9 7 12 10V17.5M9 11H15M9 15H15"/></svg>`
        ).node);
    }
}
