import {Icon} from "../Icon.js";

export class FileChartPie extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2V6A2 2 0 0 0 16 8H20"/><path d="M16 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V7.5M4 11.5A6 6 0 1 0 12.5 20"/><path d="M9 16A1 1 0 0 1 8 15V11Q8.1 10 9 10A6 6 0 0 1 14 15Q14 15.9 13 16z"/></svg>`
        ).node);
    }
}
