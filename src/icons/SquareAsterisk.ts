import {Icon} from "../Icon.js";

export class SquareAsterisk extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8V16M8.5 14 15.5 10M8.5 10 15.5 14"/></svg>`
        ).node);
    }
}
