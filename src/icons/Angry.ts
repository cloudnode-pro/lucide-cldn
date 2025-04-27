import {Icon} from "../Icon.js";

export class Angry extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 16S14.5 14 12 14 8 16 8 16M7.5 8 10 9M14 9 16.5 8M15 10"/></svg>`
        ).node);
    }
}
