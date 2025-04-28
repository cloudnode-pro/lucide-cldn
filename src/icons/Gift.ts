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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="4" x="3" y="8" rx="1"/><path d="M12 8V21M19 12V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V12M7.5 8A2.5 2.5 0 0 1 7.5 3 4.8 8 0 0 1 12 8 4.8 8 0 0 1 16.5 3 2.5 2.5 0 0 1 16.5 8"/></svg>
 */
export class Gift extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="4" x="3" y="8" rx="1"/><path d="M12 8V21M19 12V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V12M7.5 8A2.5 2.5 0 0 1 7.5 3 4.8 8 0 0 1 12 8 4.8 8 0 0 1 16.5 3 2.5 2.5 0 0 1 16.5 8"/></svg>`
        ).node);
    }
}
