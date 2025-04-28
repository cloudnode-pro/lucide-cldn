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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17V21M14.3 7.5 15.3 7.1M15.2 4.9 14.3 4.5M16.9 3.2 16.5 2.3M16.9 8.8 16.5 9.7M19.1 3.2 19.5 2.3M19.5 9.7 19.1 8.7M20.8 4.9 21.7 4.5M20.8 7.1 21.7 7.5M22 13V15A2 2 0 0 1 20 17H4A2 2 0 0 1 2 15V5A2 2 0 0 1 4 3H11M8 21H16"/><circle cx="18" cy="6" r="3"/></svg>
 */
export class MonitorCog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17V21M14.3 7.5 15.3 7.1M15.2 4.9 14.3 4.5M16.9 3.2 16.5 2.3M16.9 8.8 16.5 9.7M19.1 3.2 19.5 2.3M19.5 9.7 19.1 8.7M20.8 4.9 21.7 4.5M20.8 7.1 21.7 7.5M22 13V15A2 2 0 0 1 20 17H4A2 2 0 0 1 2 15V5A2 2 0 0 1 4 3H11M8 21H16"/><circle cx="18" cy="6" r="3"/></svg>`
        ).node);
    }
}
