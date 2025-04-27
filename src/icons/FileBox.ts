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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V8"/><path d="M14 2V6A2 2 0 0 0 16 8H20M3 13.1A2 2 0 0 0 2 14.9V18A2 2 0 0 0 3 19.9L6 21.7A2 2 0 0 0 8 21.7L11 20A2 2 0 0 0 12 18.1V15A2 2 0 0 0 11 13.1L8 11.3A2 2 0 0 0 6 11.3ZM7 17V22"/><path d="M11.7 14.2 7 17 2.3 14.2"/></svg>
 */
export class FileBox extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V8"/><path d="M14 2V6A2 2 0 0 0 16 8H20M3 13.1A2 2 0 0 0 2 14.9V18A2 2 0 0 0 3 19.9L6 21.7A2 2 0 0 0 8 21.7L11 20A2 2 0 0 0 12 18.1V15A2 2 0 0 0 11 13.1L8 11.3A2 2 0 0 0 6 11.3ZM7 17V22"/><path d="M11.7 14.2 7 17 2.3 14.2"/></svg>`
        ).node);
    }
}
