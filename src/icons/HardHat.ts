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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10V5A1 1 0 0 1 11 4H13A1 1 0 0 1 14 5V10M14 6A6 6 0 0 1 20 12V15M4 15V12A6 6 0 0 1 10 6"/><rect width="20" height="4" x="2" y="15" rx="1"/></svg>
 */
export class HardHat extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10V5A1 1 0 0 1 11 4H13A1 1 0 0 1 14 5V10M14 6A6 6 0 0 1 20 12V15M4 15V12A6 6 0 0 1 10 6"/><rect width="20" height="4" x="2" y="15" rx="1"/></svg>`
        ).node);
    }
}
