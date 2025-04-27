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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 14H19.7M9.1 3.5A9 9 0 0 1 21 12V15.3M2 2 22 22M20.4 20.4A2 2 0 0 1 19 21H18A2 2 0 0 1 16 19V16M3 14H6A2 2 0 0 1 8 16V19A2 2 0 0 1 6 21H5A2 2 0 0 1 3 19V12A9 9 0 0 1 5.6 5.6"/></svg>
 */
export class HeadphoneOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 14H19.7M9.1 3.5A9 9 0 0 1 21 12V15.3M2 2 22 22M20.4 20.4A2 2 0 0 1 19 21H18A2 2 0 0 1 16 19V16M3 14H6A2 2 0 0 1 8 16V19A2 2 0 0 1 6 21H5A2 2 0 0 1 3 19V12A9 9 0 0 1 5.6 5.6"/></svg>`
        ).node);
    }
}
