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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.228 21.925a10 10 0 1 1 8.766-9.587"/><path d="M12 6v6l1.562.781M14 18l4-4 4 4m-4 4v-8"/></svg>
 */
export class ClockArrowUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.228 21.925a10 10 0 1 1 8.766-9.587"/><path d="M12 6v6l1.562.781M14 18l4-4 4 4m-4 4v-8"/></svg>`
        ).node);
    }
}
