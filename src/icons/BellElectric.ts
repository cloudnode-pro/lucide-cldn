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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.8 4A6.3 8.7 0 0 1 20 9M9 9"/><circle cx="9" cy="9" r="7"/><rect width="10" height="6" x="4" y="16" rx="2"/><path d="M14 19C17 19 18.6 17.4 18.6 17.4"/><circle cx="20" cy="16" r="2"/></svg>
 */
export class BellElectric extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.8 4A6.3 8.7 0 0 1 20 9M9 9"/><circle cx="9" cy="9" r="7"/><rect width="10" height="6" x="4" y="16" rx="2"/><path d="M14 19C17 19 18.6 17.4 18.6 17.4"/><circle cx="20" cy="16" r="2"/></svg>`
        ).node);
    }
}
