import {Icon} from "../Icon.js";

export class GitCommitVertical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3V9"/><circle cx="12" cy="12" r="3"/><path d="M12 15V21"/></svg>`
        ).node);
    }
}
