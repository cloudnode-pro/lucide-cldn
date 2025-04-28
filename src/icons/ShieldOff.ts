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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 2 22 22M5 5A1 1 0 0 0 4 6V13C4 18 7.5 20.5 11.7 22H12.3A13 13 0 0 0 18.3 18.2M9.3 3.7 11.3 2.3A1 1 0 0 1 12.7 2.3 11 11 0 0 0 19 5 1 1 0 0 1 20 6V14.3"/></svg>
 */
export class ShieldOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 2 22 22M5 5A1 1 0 0 0 4 6V13C4 18 7.5 20.5 11.7 22H12.3A13 13 0 0 0 18.3 18.2M9.3 3.7 11.3 2.3A1 1 0 0 1 12.7 2.3 11 11 0 0 0 19 5 1 1 0 0 1 20 6V14.3"/></svg>`
        ).node);
    }
}
