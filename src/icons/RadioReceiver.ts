import {Icon} from "../Icon.js";

export class RadioReceiver extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 16V18M19 16V18"/><rect width="20" height="8" x="2" y="8" rx="2"/></svg>`
        ).node);
    }
}
