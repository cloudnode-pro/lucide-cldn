import {Icon} from "../Icon.js";

export class CircleUser extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.7V19A2 2 0 0 1 9 17H15A2 2 0 0 1 17 19V20.7"/></svg>`
        ).node);
    }
}
