import {Icon} from "../Icon.js";

export class VenetianMask extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11Q15.8 10.9 15 13"/><path d="M4 6A2 2 0 0 0 2 8V12A5 5 0 0 0 7 17 8 8 0 0 1 12 19 8 8 0 0 1 17 17 5 5 0 0 0 22 12V8A2 2 0 0 0 20 6H17A8 8 0 0 0 12 8 8 8 0 0 0 7 6z"/><path d="M6 11Q8.3 10.9 9 13"/></svg>`
        ).node);
    }
}
