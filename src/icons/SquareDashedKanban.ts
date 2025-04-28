/*
 * Copyright © 2025 Cloudnode OÜ.
 *
 * This file is part of lucide-cldn.
 *
 * lucide-cldn is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General
 * Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * lucide-cldn is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with lucide-cldn.
 * If not, see <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */
import {Icon} from "../Icon.js";

/**
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V14M12 7V11M16 7V16M5 3A2 2 0 0 0 3 5M9 3H10M14 3H15M19 3A2 2 0 0 1 21 5M21 9V10M21 14V15M21 19A2 2 0 0 1 19 21M14 21H15M9 21H10M5 21A2 2 0 0 1 3 19M3 14V15M3 9V10"/></svg>
 */
export class SquareDashedKanban extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V14M12 7V11M16 7V16M5 3A2 2 0 0 0 3 5M9 3H10M14 3H15M19 3A2 2 0 0 1 21 5M21 9V10M21 14V15M21 19A2 2 0 0 1 19 21M14 21H15M9 21H10M5 21A2 2 0 0 1 3 19M3 14V15M3 9V10"/></svg>`
        ).node);
    }
}
