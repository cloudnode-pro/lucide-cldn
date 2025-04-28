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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 21 2.7 16.7C1.7 15.7 1.7 14.2 2.7 13.3L12.3 3.7C13.3 2.7 14.8 2.7 15.7 3.7L21.3 9.3C22.3 10.3 22.3 11.8 21.3 12.7L13 21M22 21H7M5 11 14 20"/></svg>
 */
export class Eraser extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 21 2.7 16.7C1.7 15.7 1.7 14.2 2.7 13.3L12.3 3.7C13.3 2.7 14.8 2.7 15.7 3.7L21.3 9.3C22.3 10.3 22.3 11.8 21.3 12.7L13 21M22 21H7M5 11 14 20"/></svg>`
        ).node);
    }
}
