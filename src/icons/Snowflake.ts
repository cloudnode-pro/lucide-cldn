import {Icon} from "../Icon.js";

export class Snowflake extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 20 8.8 17.5 6 18M10 4 8.8 6.5 6 6M14 20 15.3 17.5 18 18M14 4 15.3 6.5 18 6"/><path d="M17 21 14 15H10M17 3 14 9 15.5 12M2 12H8.5L10 9M20 10 18.5 12 20 14"/><path d="M22 12H15.5L14 15M4 10 5.5 12 4 14M7 21 10 15 8.5 12M7 3 10 9H14"/></svg>`
        ).node);
    }
}
