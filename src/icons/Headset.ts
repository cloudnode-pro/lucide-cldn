import {Icon} from "../Icon.js";

export class Headset extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 11H6A2 2 0 0 1 8 13V16A2 2 0 0 1 6 18H5A2 2 0 0 1 3 16zM3 11A9 9 0 1 1 21 11M21 11V16A2 2 0 0 1 19 18H18A2 2 0 0 1 16 16V13A2 2 0 0 1 18 11z"/><path d="M21 16V18A4 4 0 0 1 17 22H12"/></svg>`
        ).node);
    }
}
