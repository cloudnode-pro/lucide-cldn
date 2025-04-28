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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8V16M2.7 10.3A2.4 2.4 0 0 0 2.7 13.7L10.3 21.3A2.4 2.4 0 0 0 13.7 21.3L21.3 13.7A2.4 2.4 0 0 0 21.3 10.3L13.7 2.7A2.4 2.4 0 0 0 10.3 2.7zM8 12H16"/></svg>
 */
export class DiamondPlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8V16M2.7 10.3A2.4 2.4 0 0 0 2.7 13.7L10.3 21.3A2.4 2.4 0 0 0 13.7 21.3L21.3 13.7A2.4 2.4 0 0 0 21.3 10.3L13.7 2.7A2.4 2.4 0 0 0 10.3 2.7zM8 12H16"/></svg>`
        ).node);
    }
}
