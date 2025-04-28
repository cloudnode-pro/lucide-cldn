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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12A1 1 0 0 1 12 12 1 1 0 0 0 2 12"/><path d="M7 20.7A1 1 0 1 1 12 12 1 1 0 1 0 17 3.4"/><path d="M7 3.3A1 1 0 1 1 12 11.9 1 1 0 1 0 17 20.5"/><circle cx="12" cy="12" r="10"/></svg>
 */
export class LoaderPinwheel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12A1 1 0 0 1 12 12 1 1 0 0 0 2 12"/><path d="M7 20.7A1 1 0 1 1 12 12 1 1 0 1 0 17 3.4"/><path d="M7 3.3A1 1 0 1 1 12 11.9 1 1 0 1 0 17 20.5"/><circle cx="12" cy="12" r="10"/></svg>`
        ).node);
    }
}
