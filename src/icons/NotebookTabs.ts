import {Icon} from "../Icon.js";

export class NotebookTabs extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 6H6M2 10H6M2 14H6M2 18H6"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M15 2V22M15 7H20M15 12H20M15 17H20"/></svg>`
        ).node);
    }
}
