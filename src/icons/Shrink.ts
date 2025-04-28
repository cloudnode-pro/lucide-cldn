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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 15 21 21M15 15V19.8M15 15H19.8M9 19.8V15M9 15H4.2M9 15 3 21M15 4.2V9M15 9H19.8M15 9 21 3M9 4.2V9M9 9H4.2M9 9 3 3"/></svg>
 */
export class Shrink extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 15 21 21M15 15V19.8M15 15H19.8M9 19.8V15M9 15H4.2M9 15 3 21M15 4.2V9M15 9H19.8M15 9 21 3M9 4.2V9M9 9H4.2M9 9 3 3"/></svg>`
        ).node);
    }
}
