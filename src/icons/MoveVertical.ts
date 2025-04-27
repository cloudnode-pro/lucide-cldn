import {Icon} from "../Icon.js";

export class MoveVertical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V22M8 18 12 22 16 18M8 6 12 2 16 6"/></svg>`
        ).node);
    }
}
