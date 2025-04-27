import {Icon} from "../Icon.js";

export class ReceiptRussianRuble extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2V22L6 21 8 22 10 21 12 22 14 21 16 22 18 21 20 22V2L18 3 16 2 14 3 12 2 10 3 8 2 6 3ZM8 15H13"/><path d="M8 11H13A2 2 0 1 0 13 7H10V17"/></svg>`
        ).node);
    }
}
