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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V21M12 3V6M18 6A2 2 0 0 1 19.4 6.6L21.7 8.8A1 1 0 0 1 21.7 10.2L19.4 12.4A2 2 0 0 1 18 13H6A2 2 0 0 1 4.6 12.4L2.3 10.2A1 1 0 0 1 2.3 8.8L4.6 6.6A2 2 0 0 1 6 6z"/></svg>
 */
export class Signpost extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V21M12 3V6M18 6A2 2 0 0 1 19.4 6.6L21.7 8.8A1 1 0 0 1 21.7 10.2L19.4 12.4A2 2 0 0 1 18 13H6A2 2 0 0 1 4.6 12.4L2.3 10.2A1 1 0 0 1 2.3 8.8L4.6 6.6A2 2 0 0 1 6 6z"/></svg>`
        ).node);
    }
}
