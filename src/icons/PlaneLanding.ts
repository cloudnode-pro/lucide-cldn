import {Icon} from "../Icon.js";

export class PlaneLanding extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22H22M3.8 10.8 2 9 4 4.5 5.1 5.1Q6 5.5 6 6.5C6 7.5 6.4 7.7 6.9 8L8 8.5 11 2.5 12 3A2 2 0 0 1 13.2 4.6L14 10A2 2 0 0 0 14.9 11.5L19.5 13.7Q20 14 20.4 14.7L21 15.6C21.5 16.5 20.9 17.7 19.9 17.7L18.7 18Q18 18 17.4 17.7L4.3 11.2z"/></svg>`
        ).node);
    }
}
