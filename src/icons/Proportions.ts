import {Icon} from "../Icon.js";

export class Proportions extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M12 9V20M2 9H15A2 2 0 0 1 17 11V20"/></svg>`
        ).node);
    }
}
