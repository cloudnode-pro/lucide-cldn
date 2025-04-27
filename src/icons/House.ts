import {Icon} from "../Icon.js";

export class House extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 21V13A1 1 0 0 0 14 12H10A1 1 0 0 0 9 13V21"/><path d="M3 10A2 2 0 0 1 3.7 8.5L10.7 2.5A2 2 0 0 1 13.3 2.5L20.3 8.5A2 2 0 0 1 21 10V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19z"/></svg>`
        ).node);
    }
}
