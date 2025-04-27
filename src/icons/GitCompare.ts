import {Icon} from "../Icon.js";

export class GitCompare extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6H16A2 2 0 0 1 18 8V15M11 18H8A2 2 0 0 1 6 16V9"/></svg>`
        ).node);
    }
}
