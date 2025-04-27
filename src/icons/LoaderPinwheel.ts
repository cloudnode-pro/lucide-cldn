import {Icon} from "../Icon.js";

export class LoaderPinwheel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12A1 1 0 0 1 12 12 1 1 0 0 0 2 12"/><path d="M7 20.7A1 1 0 1 1 12 12 1 1 0 1 0 17 3.4"/><path d="M7 3.3A1 1 0 1 1 12 11.9 1 1 0 1 0 17 20.5"/><circle cx="12" cy="12" r="10"/></svg>`
        ).node);
    }
}
