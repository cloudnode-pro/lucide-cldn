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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9H14M12 7V12M14 22V18A2 2 0 0 0 10 18V22"/><path d="M18 22V5.6A1 1 0 0 0 17.4 4.7L13 2.4A2 2 0 0 0 11 2.4L6.6 4.7A1 1 0 0 0 6 5.7V22"/><path d="M18 7 21.4 8.7A1 1 0 0 1 22 9.7V20A2 2 0 0 1 20 22H4A2 2 0 0 1 2 20V9.6A1 1 0 0 1 2.6 8.7L6 7"/></svg>
 */
export class Church extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9H14M12 7V12M14 22V18A2 2 0 0 0 10 18V22"/><path d="M18 22V5.6A1 1 0 0 0 17.4 4.7L13 2.4A2 2 0 0 0 11 2.4L6.6 4.7A1 1 0 0 0 6 5.7V22"/><path d="M18 7 21.4 8.7A1 1 0 0 1 22 9.7V20A2 2 0 0 1 20 22H4A2 2 0 0 1 2 20V9.6A1 1 0 0 1 2.6 8.7L6 7"/></svg>`
        ).node);
    }
}
