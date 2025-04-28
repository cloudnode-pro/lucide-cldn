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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2V5A1 1 0 0 0 11 6H16M18 18V12A1 1 0 0 0 17 11H11A1 1 0 0 0 10 12V18"/><path d="M18 22H4A2 2 0 0 1 2 20V6"/><path d="M8 18A2 2 0 0 1 6 16V4A2 2 0 0 1 8 2H17.2A2 2 0 0 1 18.6 2.6L21.4 5.4A2 2 0 0 1 22 6.8V16A2 2 0 0 1 20 18z"/></svg>
 */
export class SaveAll extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2V5A1 1 0 0 0 11 6H16M18 18V12A1 1 0 0 0 17 11H11A1 1 0 0 0 10 12V18"/><path d="M18 22H4A2 2 0 0 1 2 20V6"/><path d="M8 18A2 2 0 0 1 6 16V4A2 2 0 0 1 8 2H17.2A2 2 0 0 1 18.6 2.6L21.4 5.4A2 2 0 0 1 22 6.8V16A2 2 0 0 1 20 18z"/></svg>`
        ).node);
    }
}
