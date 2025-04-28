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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11.5V9A2 2 0 0 0 16 7 2 2 0 0 0 14 9V10.4M14 10V8A2 2 0 0 0 12 6 2 2 0 0 0 10 8V10M10 9.9V9A2 2 0 0 0 8 7 2 2 0 0 0 6 9V14M6 14A2 2 0 0 0 4 12 2 2 0 0 0 2 14"/><path d="M18 11A2 2 0 1 1 22 11V14A8 8 0 0 1 14 22H10A8 8 0 0 1 2 14 2 2 0 1 1 6 14"/></svg>
 */
export class Grab extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11.5V9A2 2 0 0 0 16 7 2 2 0 0 0 14 9V10.4M14 10V8A2 2 0 0 0 12 6 2 2 0 0 0 10 8V10M10 9.9V9A2 2 0 0 0 8 7 2 2 0 0 0 6 9V14M6 14A2 2 0 0 0 4 12 2 2 0 0 0 2 14"/><path d="M18 11A2 2 0 1 1 22 11V14A8 8 0 0 1 14 22H10A8 8 0 0 1 2 14 2 2 0 1 1 6 14"/></svg>`
        ).node);
    }
}
