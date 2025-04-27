import {Icon} from "../Icon.js";

export class TableCellsMerge extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21V15M12 9V3M3 15H21M3 9H21"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>`
        ).node);
    }
}
