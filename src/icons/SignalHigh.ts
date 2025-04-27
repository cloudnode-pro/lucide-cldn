import {Icon} from "../Icon.js";

export class SignalHigh extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 20V16M12 20V12M17 20V8"/></svg>`
        ).node);
    }
}
