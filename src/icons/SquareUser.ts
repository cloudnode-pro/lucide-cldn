import {Icon} from "../Icon.js";

export class SquareUser extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21V19A2 2 0 0 1 9 17H15A2 2 0 0 1 17 19V21"/></svg>`
        ).node);
    }
}
