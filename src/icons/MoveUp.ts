import {Icon} from "../Icon.js";

export class MoveUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 6 12 2 16 6M12 2V22"/></svg>`
        ).node);
    }
}
