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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 20 18 17H20A2 2 0 0 0 22 15V6A2 2 0 0 0 20 4H4A2 2 0 0 0 2 6V15A2 2 0 0 0 4 17H6L9 20zM6 8V9M10 8V9M14 8V9M18 8V9"/></svg>
 */
export class EthernetPort extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 20 18 17H20A2 2 0 0 0 22 15V6A2 2 0 0 0 20 4H4A2 2 0 0 0 2 6V15A2 2 0 0 0 4 17H6L9 20zM6 8V9M10 8V9M14 8V9M18 8V9"/></svg>`
        ).node);
    }
}
