import {Icon} from "../Icon.js";

export class Clover extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.2 7.8 2 22M4 12A2.8 2.8 0 1 1 7.8 7.8 2.8 2.8 0 1 1 12 4 2.8 2.8 0 1 1 16.2 7.8 2.8 2.8 0 1 1 20 12 2.8 2.8 0 1 1 16.2 16.2 2.8 2.8 0 1 1 12 20 2.8 2.8 0 1 1 7.8 16.2 1 1 0 1 1 4 12M7.8 7.8 16.2 16.2"/></svg>`
        ).node);
    }
}
