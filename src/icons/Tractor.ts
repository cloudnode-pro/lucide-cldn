import {Icon} from "../Icon.js";

export class Tractor extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 11 21 11.9A1 1 0 0 1 21.8 13L21.1 17.2A1 1 0 0 1 20.1 18H20M16 18H11"/><path d="M18 5A1 1 0 0 0 17 6V11.6M3 4H11.1A1 1 0 0 1 12.1 4.9L13 11.2M4 11V4M8 10.1V4"/><circle cx="18" cy="18" r="2"/><circle cx="7" cy="15" r="5"/></svg>`
        ).node);
    }
}
