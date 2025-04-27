import {Icon} from "../Icon.js";

export class Venus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15V22M9 19H15"/><circle cx="12" cy="9" r="6"/></svg>`
        ).node);
    }
}
