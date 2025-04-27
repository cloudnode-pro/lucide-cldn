import {Icon} from "../Icon.js";

export class TvMinimal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 21H17"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>`
        ).node);
    }
}
