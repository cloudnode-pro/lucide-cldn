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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.2 2.4A2 2 0 0 0 10.7 2.4L3.7 8.5A2 2 0 0 0 3 10V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V11.6"/><path d="M15 21V13A1 1 0 0 0 14 12H10A1 1 0 0 0 9 13V21M15 6H21M18 3V9"/></svg>
 */
export class HousePlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.2 2.4A2 2 0 0 0 10.7 2.4L3.7 8.5A2 2 0 0 0 3 10V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V11.6"/><path d="M15 21V13A1 1 0 0 0 14 12H10A1 1 0 0 0 9 13V21M15 6H21M18 3V9"/></svg>`
        ).node);
    }
}
