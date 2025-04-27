import {Icon} from "../Icon.js";

export class SplinePointer extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12.7A.5.5 0 0 1 12.7 12L21.7 15.5A.5.5 0 0 1 21.7 16.5L18.1 17.5A1 1 0 0 0 17.5 18.2L16.5 21.6A.5.5 0 0 1 15.5 21.6zM5 17A12 12 0 0 1 17 5"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/></svg>`
        ).node);
    }
}
