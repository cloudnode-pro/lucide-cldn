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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.5 8Q16.3 7.9 15.3 6A6.9 6.9 0 0 0 2 9V20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20V11.5C22 9.6 20.4 8 18.5 8M2 14H22M6 14V18M10 14V18M14 14V18M18 14V18"/></svg>
 */
export class Piano extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.5 8Q16.3 7.9 15.3 6A6.9 6.9 0 0 0 2 9V20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20V11.5C22 9.6 20.4 8 18.5 8M2 14H22M6 14V18M10 14V18M14 14V18M18 14V18"/></svg>`
        ).node);
    }
}
