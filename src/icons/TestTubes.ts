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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 2V19.5A2.5 2.5 0 0 1 6.5 22 2.5 2.5 0 0 1 4 19.5V2M20 2V19.5A2.5 2.5 0 0 1 17.5 22 2.5 2.5 0 0 1 15 19.5V2M3 2H10M14 2H21M9 16H4M20 16H15"/></svg>
 */
export class TestTubes extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 2V19.5A2.5 2.5 0 0 1 6.5 22 2.5 2.5 0 0 1 4 19.5V2M20 2V19.5A2.5 2.5 0 0 1 17.5 22 2.5 2.5 0 0 1 15 19.5V2M3 2H10M14 2H21M9 16H4M20 16H15"/></svg>`
        ).node);
    }
}
