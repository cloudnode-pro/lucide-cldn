import {Icon} from "../Icon.js";

export class Workflow extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11V15A2 2 0 0 0 9 17H13"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>`
        ).node);
    }
}
