import {Icon} from "../Icon.js";

export class ReplyAll extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><polyline points="7 17 2 12 7 7"/><polyline points="12 17 7 12 12 7"/><path d="M22 18V16A4 4 0 0 0 18 12H7"/></svg>`
        ).node);
    }
}
