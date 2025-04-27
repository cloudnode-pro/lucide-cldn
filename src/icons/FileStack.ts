import {Icon} from "../Icon.js";

export class FileStack extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 7H18A2 2 0 0 1 16 5V2"/><path d="M21 6V12.5Q20.9 13.9 19.5 14H12.5Q11.1 13.9 11 12.5V3.5Q11.1 2.2 12.5 2H17Z"/><path d="M7 8V16.8Q7 17.3 7.4 17.6 7.7 18 8.2 18H15"/><path d="M3 12V20.8Q3 21.3 3.4 21.6 3.7 22 4.2 22H11"/></svg>`
        ).node);
    }
}
