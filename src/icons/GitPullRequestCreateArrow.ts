import {Icon} from "../Icon.js";

export class GitPullRequestCreateArrow extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="5" cy="6" r="3"/><path d="M5 9V21M15 9 12 6 15 3"/><path d="M12 6H17A2 2 0 0 1 19 8V11M19 15V21M22 18H16"/></svg>`
        ).node);
    }
}
