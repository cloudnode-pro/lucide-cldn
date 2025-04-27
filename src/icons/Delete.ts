import {Icon} from "../Icon.js";

export class Delete extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 5A2 2 0 0 0 8.7 5.5L2.3 11.3A1 1 0 0 0 2.3 12.7L8.7 18.5A2 2 0 0 0 10 19H20A2 2 0 0 0 22 17V7A2 2 0 0 0 20 5zM12 9 18 15M18 9 12 15"/></svg>`
        ).node);
    }
}
