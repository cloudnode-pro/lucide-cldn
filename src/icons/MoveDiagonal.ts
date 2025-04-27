import {Icon} from "../Icon.js";

export class MoveDiagonal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 19H5V13M13 5H19V11M19 5 5 19"/></svg>`
        ).node);
    }
}
