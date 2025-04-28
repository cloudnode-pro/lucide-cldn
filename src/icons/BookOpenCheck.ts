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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21V7M16 12 18 14 22 10"/><path d="M22 6V4A1 1 0 0 0 21 3H16A4 4 0 0 0 12 7 4 4 0 0 0 8 3H3A1 1 0 0 0 2 4V17A1 1 0 0 0 3 18H9A3 3 0 0 1 12 21 3 3 0 0 1 15 18H21A1 1 0 0 0 22 17V15.7"/></svg>
 */
export class BookOpenCheck extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21V7M16 12 18 14 22 10"/><path d="M22 6V4A1 1 0 0 0 21 3H16A4 4 0 0 0 12 7 4 4 0 0 0 8 3H3A1 1 0 0 0 2 4V17A1 1 0 0 0 3 18H9A3 3 0 0 1 12 21 3 3 0 0 1 15 18H21A1 1 0 0 0 22 17V15.7"/></svg>`
        ).node);
    }
}
