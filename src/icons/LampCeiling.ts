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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V7M14.8 16A3 3 0 1 1 9.2 16"/><path d="M21 14.6A1 1 0 0 1 20 16H4A1 1 0 0 1 3 14.6L6 7.6A1 1 0 0 1 7 7H17A1 1 0 0 1 18 7.6z"/></svg>
 */
export class LampCeiling extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2V7M14.8 16A3 3 0 1 1 9.2 16"/><path d="M21 14.6A1 1 0 0 1 20 16H4A1 1 0 0 1 3 14.6L6 7.6A1 1 0 0 1 7 7H17A1 1 0 0 1 18 7.6z"/></svg>`
        ).node);
    }
}
