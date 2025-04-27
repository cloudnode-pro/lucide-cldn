import {Icon} from "../Icon.js";

export class TrainTrack extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 17 17 2M2 14 10 22M5 11 13 19M8 8 16 16M11 5 19 13M14 2 22 10M7 22 22 7"/></svg>`
        ).node);
    }
}
