import {Icon} from "../Icon.js";

export class SquareFunction extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 17Q11.9 17 11.8 14.2V10C11.8 8 12.8 6.7 15 7M9 11.2H14.7"/></svg>`
        ).node);
    }
}
