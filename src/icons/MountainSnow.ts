import {Icon} from "../Icon.js";

export class MountainSnow extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3 12 11 17 6 22 21H2z"/><path d="M4.1 15Q8.1 12.9 12 15.6 16.1 18.5 20.2 15.7"/></svg>`
        ).node);
    }
}
