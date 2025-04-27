import {Icon} from "../Icon.js";

export class SquareKanban extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7V14M12 7V11M16 7V16"/></svg>`
        ).node);
    }
}
