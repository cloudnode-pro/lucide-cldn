import {Icon} from "../Icon.js";

export class SwitchCamera extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 19H4A2 2 0 0 1 2 17V7A2 2 0 0 1 4 5H9M13 5H20A2 2 0 0 1 22 7V17A2 2 0 0 1 20 19H15"/><circle cx="12" cy="12" r="3"/><path d="M18 22 15 19 18 16M6 2 9 5 6 8"/></svg>`
        ).node);
    }
}
