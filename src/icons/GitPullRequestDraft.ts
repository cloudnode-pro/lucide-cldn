import {Icon} from "../Icon.js";

export class GitPullRequestDraft extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M18 6V5M18 11V10"/><line x1="6" x2="6" y1="9" y2="21"/></svg>`
        ).node);
    }
}
