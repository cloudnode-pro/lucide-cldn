import {Icon} from "../Icon.js";

export class ListTodo extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="6" x="3" y="5" rx="1"/><path d="M3 17 5 19 9 15M13 6H21M13 12H21M13 18H21"/></svg>`
        ).node);
    }
}
