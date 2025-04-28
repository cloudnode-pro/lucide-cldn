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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12H10M15 8H10M19 17V5A2 2 0 0 0 17 3H4"/><path d="M8 21H20A2 2 0 0 0 22 19V18A1 1 0 0 0 21 17H11A1 1 0 0 0 10 18V19A2 2 0 1 1 6 19V5A2 2 0 1 0 2 5V7A1 1 0 0 0 3 8H6"/></svg>
 */
export class ScrollText extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12H10M15 8H10M19 17V5A2 2 0 0 0 17 3H4"/><path d="M8 21H20A2 2 0 0 0 22 19V18A1 1 0 0 0 21 17H11A1 1 0 0 0 10 18V19A2 2 0 1 1 6 19V5A2 2 0 1 0 2 5V7A1 1 0 0 0 3 8H6"/></svg>`
        ).node);
    }
}
