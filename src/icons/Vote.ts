import {Icon} from "../Icon.js";

export class Vote extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12 11 14 15 10"/><path d="M5 7Q5.2 5.2 7 5H17A2 2 0 0 1 19 7V19H5zM22 19H2"/></svg>`
        ).node);
    }
}
