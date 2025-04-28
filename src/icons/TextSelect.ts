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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 21h1M14 3h1m4 0a2 2 0 0 1 2 2m0 9v1m0 4a2 2 0 0 1-2 2m2-12v1M3 14v1m0-6v1m2 11a2 2 0 0 1-2-2M5 3a2 2 0 0 0-2 2m4 7h10M7 16h6M7 8h8M9 21h1M9 3h1"/></svg>
 */
export class TextSelect extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 21h1M14 3h1m4 0a2 2 0 0 1 2 2m0 9v1m0 4a2 2 0 0 1-2 2m2-12v1M3 14v1m0-6v1m2 11a2 2 0 0 1-2-2M5 3a2 2 0 0 0-2 2m4 7h10M7 16h6M7 8h8M9 21h1M9 3h1"/></svg>`
        ).node);
    }
}
