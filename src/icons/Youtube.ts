import {Icon} from "../Icon.js";

export class Youtube extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.5 17A24 24 0 0 1 2.5 7 2 2 0 0 1 3.9 5.6 50 50 0 0 1 20.1 5.6 2 2 0 0 1 21.5 7 24 24 0 0 1 21.5 17 2 2 0 0 1 20.1 18.4 50 50 0 0 1 3.9 18.4 2 2 0 0 1 2.5 17"/><path d="M10 15 15 12 10 9z"/></svg>`
        ).node);
    }
}
