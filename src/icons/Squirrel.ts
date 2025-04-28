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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.2 22A3 3 0 0 0 13 17"/><path d="M16 20A3 3 0 0 1 19 17H20A2 2 0 0 0 22 15V13A4 4 0 0 0 18 9V4M18 13"/><path d="M18 6A4 4 0 0 0 14 10 7 7 0 0 0 7 17C7 12 11 12 11 6.5A4.5 4.5 0 1 0 2 6.5 2.5 2.5 0 0 0 7 6.5C7 10 3 11 3 17A5 5 0 0 0 8 22H18"/></svg>
 */
export class Squirrel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.2 22A3 3 0 0 0 13 17"/><path d="M16 20A3 3 0 0 1 19 17H20A2 2 0 0 0 22 15V13A4 4 0 0 0 18 9V4M18 13"/><path d="M18 6A4 4 0 0 0 14 10 7 7 0 0 0 7 17C7 12 11 12 11 6.5A4.5 4.5 0 1 0 2 6.5 2.5 2.5 0 0 0 7 6.5C7 10 3 11 3 17A5 5 0 0 0 8 22H18"/></svg>`
        ).node);
    }
}
