import {Icon} from "../Icon.js";

export class LockOpen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7A5 5 0 0 1 16.9 6"/></svg>`
        ).node);
    }
}
