import {Icon} from "../Icon.js";

export class SendToBack extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="8" x="14" y="14" rx="2"/><rect width="8" height="8" x="2" y="2" rx="2"/><path d="M7 14V15A2 2 0 0 0 9 17H10M14 7H15A2 2 0 0 1 17 9V10"/></svg>`
        ).node);
    }
}
