import {Icon} from "../Icon.js";

export class ToyBrick extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="12" x="3" y="8" rx="1"/><path d="M10 8V5Q10 4 9 4H6A1 1 0 0 0 5 5V8M19 8V5Q19 4 18 4H15A1 1 0 0 0 14 5V8"/></svg>`
        ).node);
    }
}
