import {Icon} from "../Icon.js";

export class HousePlug extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12V9M14 12V9M15 12A1 1 0 0 1 16 13V15A2 2 0 0 1 14 17H10A2 2 0 0 1 8 15V13A1 1 0 0 1 9 12z"/><path d="M8.5 21H5A2 2 0 0 1 3 19V10A2 2 0 0 1 3.7 8.5L10.7 2.5A2 2 0 0 1 13.3 2.5L20.3 8.5A2 2 0 0 1 21 10V19A2 2 0 0 1 19 21H14A2 2 0 0 1 12 19V17"/></svg>`
        ).node);
    }
}
