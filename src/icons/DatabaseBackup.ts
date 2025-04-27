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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12A9 3 0 0 0 8 14.7M21 9.3V5"/><path d="M3 5V19A9 3 0 0 0 9.5 21.9M12 12V16H16"/><path d="M13 20A5 5 0 0 0 22 17 4.5 4.5 0 0 0 17.5 12.5Q15.5 12.5 14.1 13.9L12 16"/></svg>
 */
export class DatabaseBackup extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12A9 3 0 0 0 8 14.7M21 9.3V5"/><path d="M3 5V19A9 3 0 0 0 9.5 21.9M12 12V16H16"/><path d="M13 20A5 5 0 0 0 22 17 4.5 4.5 0 0 0 17.5 12.5Q15.5 12.5 14.1 13.9L12 16"/></svg>`
        ).node);
    }
}
