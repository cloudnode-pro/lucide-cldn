import {Icon} from "../Icon.js";

export class TowerControl extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.2 12.3 20 6H4L5.8 12.3A1 1 0 0 0 6.8 13H17.3A1 1 0 0 0 18.3 12.3ZM8 13V22M16 22V13M9 6 10 13M15 6 14 13M12 6V2M13 2H11"/></svg>`
        ).node);
    }
}
