import {Icon} from "../Icon.js";

export class ArrowBigUpDash extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19H15M9 15V12H5L12 5 19 12H15V15z"/></svg>`
        ).node);
    }
}
