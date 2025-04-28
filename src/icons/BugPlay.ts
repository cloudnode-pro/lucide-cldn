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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.8 21.5A.5.5 0 0 1 12 21.1V12.9A.5.5 0 0 1 12.8 12.5L18.6 16.2A1 1 0 0 1 18.6 17.8zM14.1 3.9 16 2"/><path d="M18 11A4 4 0 0 0 14 7H10A4 4 0 0 0 6 11V14A6 6 0 0 0 8 18.5"/><path d="M21 5A4 4 0 0 1 17.5 9M3 21A4 4 0 0 1 6.8 17M6 13H2M6.5 9A4 4 0 0 1 3 5M8 2 9.9 3.9M9 7.1V6.1A3 3 0 1 1 15 6.1V7.1"/></svg>
 */
export class BugPlay extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.8 21.5A.5.5 0 0 1 12 21.1V12.9A.5.5 0 0 1 12.8 12.5L18.6 16.2A1 1 0 0 1 18.6 17.8zM14.1 3.9 16 2"/><path d="M18 11A4 4 0 0 0 14 7H10A4 4 0 0 0 6 11V14A6 6 0 0 0 8 18.5"/><path d="M21 5A4 4 0 0 1 17.5 9M3 21A4 4 0 0 1 6.8 17M6 13H2M6.5 9A4 4 0 0 1 3 5M8 2 9.9 3.9M9 7.1V6.1A3 3 0 1 1 15 6.1V7.1"/></svg>`
        ).node);
    }
}
