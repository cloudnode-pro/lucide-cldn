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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 12H3A1 1 0 0 0 2 13V15A1 1 0 0 0 3 16H17M18 8C18 5.5 16 5.5 16 3M21 16A1 1 0 0 0 22 15V13A1 1 0 0 0 21 12M22 8C22 5.5 20 5.5 20 3M7 12V16"/></svg>
 */
export class Cigarette extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 12H3A1 1 0 0 0 2 13V15A1 1 0 0 0 3 16H17M18 8C18 5.5 16 5.5 16 3M21 16A1 1 0 0 0 22 15V13A1 1 0 0 0 21 12M22 8C22 5.5 20 5.5 20 3M7 12V16"/></svg>`
        ).node);
    }
}
