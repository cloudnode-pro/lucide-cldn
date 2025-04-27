import {Icon} from "../Icon.js";

export class LampWallUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 9.6A1 1 0 0 1 19 11H9A1 1 0 0 1 8 9.6L10 4.6A1 1 0 0 1 11 4H17A1 1 0 0 1 18 4.6zM6 15A2 2 0 0 1 8 17V19A2 2 0 0 1 6 21H5A1 1 0 0 1 4 20V16A1 1 0 0 1 5 15z"/><path d="M8 18H12A2 2 0 0 0 14 16V11"/></svg>`
        ).node);
    }
}
