import {Icon} from "../Icon.js";

export class GitFork extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9V11Q18 12 17 12H7Q6 12 6 11V9M12 12V15"/></svg>`
        ).node);
    }
}
