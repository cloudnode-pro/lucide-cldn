import {Icon} from "../Icon.js";

export class TableProperties extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3V21"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3M21 15H3"/></svg>`
        ).node);
    }
}
