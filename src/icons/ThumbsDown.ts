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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 14V2M9 18.1 10 14H4.2A2 2 0 0 1 2.2 11.4L4.7 3.4A2 2 0 0 1 6.5 2H20A2 2 0 0 1 22 4V12A2 2 0 0 1 20 14H17.2A2 2 0 0 0 15.5 15.1L12 22A3 3 0 0 1 9 18.1"/></svg>
 */
export class ThumbsDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 14V2M9 18.1 10 14H4.2A2 2 0 0 1 2.2 11.4L4.7 3.4A2 2 0 0 1 6.5 2H20A2 2 0 0 1 22 4V12A2 2 0 0 1 20 14H17.2A2 2 0 0 0 15.5 15.1L12 22A3 3 0 0 1 9 18.1"/></svg>`
        ).node);
    }
}
