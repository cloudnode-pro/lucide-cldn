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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 20V11H2V20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20M18 11V4H6V11"/><path d="M15 22V18A3 3 0 0 0 12 15 3 3 0 0 0 9 18V22M22 11V9M2 11V9M6 4V2M18 4V2M10 4V2M14 4V2"/></svg>
 */
export class Castle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 20V11H2V20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20M18 11V4H6V11"/><path d="M15 22V18A3 3 0 0 0 12 15 3 3 0 0 0 9 18V22M22 11V9M2 11V9M6 4V2M18 4V2M10 4V2M14 4V2"/></svg>`
        ).node);
    }
}
