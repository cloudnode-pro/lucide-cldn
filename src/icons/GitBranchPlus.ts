import {Icon} from "../Icon.js";

export class GitBranchPlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 3V15M18 9A3 3 0 1 0 18 3 3 3 0 0 0 18 9M6 21A3 3 0 1 0 6 15 3 3 0 0 0 6 21"/><path d="M15 6A9 9 0 0 0 6 15M18 15V21M21 18H15"/></svg>`
        ).node);
    }
}
