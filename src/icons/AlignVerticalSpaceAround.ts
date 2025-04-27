import {Icon} from "../Icon.js";

export class AlignVerticalSpaceAround extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="10" height="6" x="7" y="9" rx="2"/><path d="M22 20H2M22 4H2"/></svg>`
        ).node);
    }
}
