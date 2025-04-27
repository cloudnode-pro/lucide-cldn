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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 10V22M15 5.9 14 10H19.8A2 2 0 0 1 21.8 12.6L19.4 20.6A2 2 0 0 1 17.5 22H4A2 2 0 0 1 2 20V12A2 2 0 0 1 4 10H6.8A2 2 0 0 0 8.6 8.9L12 2A3 3 0 0 1 15 5.9"/></svg>
 */
export class ThumbsUp extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 10V22M15 5.9 14 10H19.8A2 2 0 0 1 21.8 12.6L19.4 20.6A2 2 0 0 1 17.5 22H4A2 2 0 0 1 2 20V12A2 2 0 0 1 4 10H6.8A2 2 0 0 0 8.6 8.9L12 2A3 3 0 0 1 15 5.9"/></svg>`
        ).node);
    }
}
