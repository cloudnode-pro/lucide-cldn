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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"/><path d="M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"/><path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26M17.99 5.52a20.8 20.8 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"/><path d="M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"/><path d="M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28m-1.23-9.5a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05M2 2l20 20"/></svg>
 */
export class HopOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"/><path d="M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"/><path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26M17.99 5.52a20.8 20.8 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"/><path d="M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"/><path d="M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28m-1.23-9.5a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05M2 2l20 20"/></svg>`
        ).node);
    }
}
