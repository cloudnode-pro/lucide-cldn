import {Icon} from "../Icon.js";

export class Bus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 6V12M15 6V12M2 12H21.6M18 18H21L21.8 15.2 22 14 21.8 12.8 20.4 7.8Q19.8 6.2 18 6H4A2 2 0 0 0 2 8V18H5"/><circle cx="7" cy="18" r="2"/><path d="M9 18H14"/><circle cx="16" cy="18" r="2"/></svg>`
        ).node);
    }
}
