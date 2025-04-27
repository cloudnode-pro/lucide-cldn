import {Icon} from "../Icon.js";

export class GitCompareArrows extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="5" cy="6" r="3"/><path d="M12 6H17A2 2 0 0 1 19 8V15"/><path d="M15 9 12 6 15 3"/><circle cx="19" cy="18" r="3"/><path d="M12 18H7A2 2 0 0 1 5 16V9"/><path d="M9 15 12 18 9 21"/></svg>`
        ).node);
    }
}
