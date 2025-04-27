import {Icon} from "../Icon.js";

export class MoveDownRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 13V19H13M5 5 19 19"/></svg>`
        ).node);
    }
}
