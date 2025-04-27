import {Icon} from "../Icon.js";

export class SendHorizontal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.7 3A.5.5 0 0 0 3 3.7L6 11.3A2 2 0 0 1 5.9 12.7L3 20.3A.5.5 0 0 0 3.7 21L21.7 12.5A.5.5 0 0 0 21.7 11.5zM6 12H22"/></svg>`
        ).node);
    }
}
