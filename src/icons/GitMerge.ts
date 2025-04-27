import {Icon} from "../Icon.js";

export class GitMerge extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9A9 9 0 0 0 15 18"/></svg>`
        ).node);
    }
}
