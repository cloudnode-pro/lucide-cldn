import {Icon} from "../Icon.js";

export class TruckElectric extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 19V7A2 2 0 0 0 12 5H9M15 19H9M19 19H21A1 1 0 0 0 22 18V14.4L21.8 13.7 18.3 9.4A1 1 0 0 0 17.5 9H14M2 13V18A1 1 0 0 0 3 19H5M4 3 2.2 5.2A.5.5 0 0 0 2.4 6H4.7A.5.5 0 0 1 5 7L3 9"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/></svg>`
        ).node);
    }
}
