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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 3.3V5A3 3 0 0 0 10 8M11 22V18A2 2 0 0 0 9 16 2 2 0 0 1 7 14V13A2 2 0 0 0 5 11H2M21.5 15H17A2 2 0 0 0 15 17V21.5"/><path d="M12 2A10 10 0 1 0 21.5 15M20 6V4A2 2 0 1 0 16 4V6"/><rect width="8" height="5" x="14" y="6" rx="1"/></svg>
 */
export class EarthLock extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 3.3V5A3 3 0 0 0 10 8M11 22V18A2 2 0 0 0 9 16 2 2 0 0 1 7 14V13A2 2 0 0 0 5 11H2M21.5 15H17A2 2 0 0 0 15 17V21.5"/><path d="M12 2A10 10 0 1 0 21.5 15M20 6V4A2 2 0 1 0 16 4V6"/><rect width="8" height="5" x="14" y="6" rx="1"/></svg>`
        ).node);
    }
}
