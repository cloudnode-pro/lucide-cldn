import {Icon} from "../Icon.js";

export class AlignHorizontalSpaceAround extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="10" x="9" y="7" rx="2"/><path d="M4 22V2M20 22V2"/></svg>`
        ).node);
    }
}
