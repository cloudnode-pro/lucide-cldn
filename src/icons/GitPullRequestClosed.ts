import {Icon} from "../Icon.js";

export class GitPullRequestClosed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><path d="M6 9V21M21 3 15 9M21 9 15 3M18 11.5V15"/><circle cx="18" cy="18" r="3"/></svg>`
        ).node);
    }
}
