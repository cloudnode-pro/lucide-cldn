import {Icon} from "../Icon.js";

export class Ear extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 8.5A6.5 6.5 0 1 1 19 8.5C19 14.5 13 14.5 13 18.5A3.5 3.5 0 1 1 6 18.5"/><path d="M15 8.5A2.5 2.5 0 0 0 10 8.5V9.5A2 2 0 1 1 10 13.5"/></svg>`
        ).node);
    }
}
