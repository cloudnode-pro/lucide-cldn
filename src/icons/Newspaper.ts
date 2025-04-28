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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18H10M18 14H10M4 22H20A2 2 0 0 0 22 20V4A2 2 0 0 0 20 2H8A2 2 0 0 0 6 4V20A2 2 0 0 1 2 20V11A2 2 0 0 1 4 9H6"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>
 */
export class Newspaper extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18H10M18 14H10M4 22H20A2 2 0 0 0 22 20V4A2 2 0 0 0 20 2H8A2 2 0 0 0 6 4V20A2 2 0 0 1 2 20V11A2 2 0 0 1 4 9H6"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>`
        ).node);
    }
}
