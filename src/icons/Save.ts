import {Icon} from "../Icon.js";

export class Save extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.2 3A2 2 0 0 1 16.6 3.6L20.4 7.4A2 2 0 0 1 21 8.8V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3z"/><path d="M17 21V14A1 1 0 0 0 16 13H8A1 1 0 0 0 7 14V21M7 3V7A1 1 0 0 0 8 8H15"/></svg>`
        ).node);
    }
}
