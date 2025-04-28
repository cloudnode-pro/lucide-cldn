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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12H5A2 2 0 0 0 3 14V19"/><circle cx="13" cy="19" r="2"/><circle cx="5" cy="19" r="2"/><path d="M8 19H11M16 2V19H22M6 12V7Q6.2 5.2 8 5H11L16 10"/></svg>
 */
export class Forklift extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12H5A2 2 0 0 0 3 14V19"/><circle cx="13" cy="19" r="2"/><circle cx="5" cy="19" r="2"/><path d="M8 19H11M16 2V19H22M6 12V7Q6.2 5.2 8 5H11L16 10"/></svg>`
        ).node);
    }
}
