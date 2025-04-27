import {Icon} from "../Icon.js";

export class RadioTower extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.9 16.1A10 10 0 0 1 4.9 1.9M7.8 4.7A6 6 0 0 0 7 12.2"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8A6 6 0 0 1 17 12.3M19.1 1.9A10 10 0 0 1 19.1 16M9.5 18H14.5M8 22 12 11 16 22"/></svg>`
        ).node);
    }
}
