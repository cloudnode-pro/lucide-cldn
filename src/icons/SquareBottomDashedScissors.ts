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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22A2 2 0 0 1 2 20V4A2 2 0 0 1 4 2H20A2 2 0 0 1 22 4V20A2 2 0 0 1 20 22M10 22H8M16 22H14"/><circle cx="8" cy="8" r="2"/><path d="M9.4 9.4 12 12M14.8 14.8 18 18"/><circle cx="8" cy="16" r="2"/><path d="M18 6 9.4 14.6"/></svg>
 */
export class SquareBottomDashedScissors extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22A2 2 0 0 1 2 20V4A2 2 0 0 1 4 2H20A2 2 0 0 1 22 4V20A2 2 0 0 1 20 22M10 22H8M16 22H14"/><circle cx="8" cy="8" r="2"/><path d="M9.4 9.4 12 12M14.8 14.8 18 18"/><circle cx="8" cy="16" r="2"/><path d="M18 6 9.4 14.6"/></svg>`
        ).node);
    }
}
