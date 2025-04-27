import {Icon} from "../Icon.js";

export class Split extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3H21V8M8 3H3V8"/><path d="M12 22V13.7A4 4 0 0 0 10.8 10.8L3 3M15 9 21 3"/></svg>`
        ).node);
    }
}
