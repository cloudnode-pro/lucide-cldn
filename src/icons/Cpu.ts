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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20V22M12 2V4M17 20V22M17 2V4M2 12H4M2 17H4M2 7H4M20 12H22M20 17H22M20 7H22M7 20V22M7 2V4"/><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="8" height="8" x="8" y="8" rx="1"/></svg>
 */
export class Cpu extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20V22M12 2V4M17 20V22M17 2V4M2 12H4M2 17H4M2 7H4M20 12H22M20 17H22M20 7H22M7 20V22M7 2V4"/><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="8" height="8" x="8" y="8" rx="1"/></svg>`
        ).node);
    }
}
