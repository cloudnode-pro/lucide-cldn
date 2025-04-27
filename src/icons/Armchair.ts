import {Icon} from "../Icon.js";

export class Armchair extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 9V6A2 2 0 0 0 17 4H7A2 2 0 0 0 5 6V9"/><path d="M3 16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16V11A2 2 0 0 0 17 11V12.5L16.5 13H7.5L7 12.5V11A2 2 0 0 0 3 11zM5 18V20M19 18V20"/></svg>`
        ).node);
    }
}
