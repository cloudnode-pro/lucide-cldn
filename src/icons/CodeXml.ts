import {Icon} from "../Icon.js";

export class CodeXml extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 16 22 12 18 8M6 8 2 12 6 16M14.5 4 9.5 20"/></svg>`
        ).node);
    }
}
