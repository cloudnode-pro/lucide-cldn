import {Icon} from "../Icon.js";

export class FolderSync extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 20H4A2 2 0 0 1 2 18V5A2 2 0 0 1 4 3H7.9A2 2 0 0 1 9.6 3.9L10.4 5.1A2 2 0 0 0 12.1 6H20A2 2 0 0 1 22 8V8.5"/><path d="M12 10V14H16"/><path d="M12 14 13.5 12.4A5 5 0 0 1 21.5 13.9M22 22V18H18"/><path d="M22 18 20.5 19.6A5 5 0 0 1 12.5 18.1"/></svg>`
        ).node);
    }
}
