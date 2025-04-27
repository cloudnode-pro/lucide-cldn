import {Icon} from "../Icon.js";

export class NonBinary extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V12M8.5 4 15.5 8M8.5 8 15.5 4"/><circle cx="12" cy="17" r="5"/></svg>`
        ).node);
    }
}
