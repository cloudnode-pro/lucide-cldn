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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 5H19A2 2 0 0 1 21 7V15.5M17 11H16.5M19 19H5A2 2 0 0 1 3 17V7A2 2 0 0 1 5 5M2 2 22 22M7 11H11M7 15H9.5"/></svg>
 */
export class CaptionsOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 5H19A2 2 0 0 1 21 7V15.5M17 11H16.5M19 19H5A2 2 0 0 1 3 17V7A2 2 0 0 1 5 5M2 2 22 22M7 11H11M7 15H9.5"/></svg>`
        ).node);
    }
}
