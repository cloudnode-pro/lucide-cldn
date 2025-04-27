import {Icon} from "../Icon.js";

export class Crown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.6 3.3A.5.5 0 0 1 12.4 3.3L15.4 8.9A1 1 0 0 0 16.9 9.2L21.2 5.5A.5.5 0 0 1 22 6L19 16.3A1 1 0 0 1 18.1 17H5.9A1 1 0 0 1 4.8 16.3L2 6A.5.5 0 0 1 2.8 5.5L7.1 9.2A1 1 0 0 0 8.6 8.9zM5 21H19"/></svg>`
        ).node);
    }
}
