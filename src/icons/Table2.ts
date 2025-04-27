import {Icon} from "../Icon.js";

export class Table2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 3H5A2 2 0 0 0 3 5V9M9 3H19A2 2 0 0 1 21 5V9M9 3V21M9 21H19A2 2 0 0 0 21 19V9M9 21H5A2 2 0 0 1 3 19V9M3 9H21"/></svg>`
        ).node);
    }
}
