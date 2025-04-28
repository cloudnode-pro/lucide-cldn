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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 22H19M5 2H19M17 22V17.8A2 2 0 0 0 16.4 16.4L12 12 7.6 16.4A2 2 0 0 0 7 17.8V22M7 2V6.2A2 2 0 0 0 7.6 7.6L12 12 16.4 7.6A2 2 0 0 0 17 6.2V2"/></svg>
 */
export class Hourglass extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 22H19M5 2H19M17 22V17.8A2 2 0 0 0 16.4 16.4L12 12 7.6 16.4A2 2 0 0 0 7 17.8V22M7 2V6.2A2 2 0 0 0 7.6 7.6L12 12 16.4 7.6A2 2 0 0 0 17 6.2V2"/></svg>`
        ).node);
    }
}
