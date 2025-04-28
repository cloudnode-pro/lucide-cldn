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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.5 7.5C15.6 4.2 14 2 12 2 9.2 2 7 6.5 7 12S9.2 22 12 22L13 21.8M15.2 13.7 19 15.6 17.1 19.4"/><path d="M19 15.6Q16.2 17 12 17C6.5 17 2 14.8 2 12S6.5 7 12 7C16.8 7 20.9 8.7 21.8 11"/></svg>
 */
export class Rotate3d extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.5 7.5C15.6 4.2 14 2 12 2 9.2 2 7 6.5 7 12S9.2 22 12 22L13 21.8M15.2 13.7 19 15.6 17.1 19.4"/><path d="M19 15.6Q16.2 17 12 17C6.5 17 2 14.8 2 12S6.5 7 12 7C16.8 7 20.9 8.7 21.8 11"/></svg>`
        ).node);
    }
}
