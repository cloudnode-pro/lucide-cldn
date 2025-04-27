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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 12V14A2 2 0 0 1 14 16H9A1 1 0 0 0 8 17V20A2 2 0 0 0 10 22H20A2 2 0 0 0 22 20V10A2 2 0 0 0 20 8H20M4 16A2 2 0 0 1 2 14V4A2 2 0 0 1 4 2H14A2 2 0 0 1 16 4V7A1 1 0 0 1 15 8H10A2 2 0 0 0 8 10V12"/></svg>
 */
export class SquaresExclude extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 12V14A2 2 0 0 1 14 16H9A1 1 0 0 0 8 17V20A2 2 0 0 0 10 22H20A2 2 0 0 0 22 20V10A2 2 0 0 0 20 8H20M4 16A2 2 0 0 1 2 14V4A2 2 0 0 1 4 2H14A2 2 0 0 1 16 4V7A1 1 0 0 1 15 8H10A2 2 0 0 0 8 10V12"/></svg>`
        ).node);
    }
}
