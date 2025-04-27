import {Icon} from "../Icon.js";

export class WindArrowDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2V10M12.8 21.6A2 2 0 1 0 14 18H2M17.5 10A2.5 2.5 0 1 1 19.5 14H2M6 6 10 10 14 6"/></svg>`
        ).node);
    }
}
