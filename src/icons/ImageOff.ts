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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="2" x2="22" y1="2" y2="22"/><path d="M10.4 10.4A2 2 0 1 1 7.6 7.6"/><line x1="13.5" x2="6" y1="13.5" y2="21"/><line x1="18" x2="21" y1="12" y2="15"/><path d="M3.6 3.6A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19Q19.9 21 20.4 20.4M21 15V5A2 2 0 0 0 19 3H9"/></svg>
 */
export class ImageOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="2" x2="22" y1="2" y2="22"/><path d="M10.4 10.4A2 2 0 1 1 7.6 7.6"/><line x1="13.5" x2="6" y1="13.5" y2="21"/><line x1="18" x2="21" y1="12" y2="15"/><path d="M3.6 3.6A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19Q19.9 21 20.4 20.4M21 15V5A2 2 0 0 0 19 3H9"/></svg>`
        ).node);
    }
}
