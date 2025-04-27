import {Icon} from "../Icon.js";

export class ArrowBigLeftDash extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 15V9M15 15H12V19L5 12 12 5V9H15z"/></svg>`
        ).node);
    }
}
