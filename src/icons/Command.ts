import {Icon} from "../Icon.js";

export class Command extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 6V18A3 3 0 1 0 18 15H6A3 3 0 1 0 9 18V6A3 3 0 1 0 6 9H18A3 3 0 1 0 15 6"/></svg>`
        ).node);
    }
}
