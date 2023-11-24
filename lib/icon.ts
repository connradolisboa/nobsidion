/*
    Originally created by EasyChris (2022)
    Modified by Quan Phan (2023)

    This file is part of Nobsidion and is licensed under the GNU General Public License v3.0.
    Modifications include <brief description of modifications>.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

import { addIcon } from "obsidian";

const icons: { [key: string]: string } = {
	"notion-logo": `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="100px" viewBox="0 0 100 100" version="1.1">
            <g id="surface1">
                <path style=" stroke:none;fill-rule:evenodd;fill:currentColor;fill-opacity:1;" d="M 18.738281 17.796875 C 21.832031 20.308594 22.996094 20.117188 28.804688 19.730469 L 83.582031 16.441406 C 84.746094 16.441406 83.78125 15.28125 83.390625 15.089844 L 74.292969 8.511719 C 72.550781 7.160156 70.230469 5.609375 65.777344 5.996094 L 12.734375 9.867188 C 10.800781 10.058594 10.414062 11.023438 11.183594 11.800781 Z M 22.027344 30.5625 L 22.027344 88.199219 C 22.027344 91.296875 23.574219 92.457031 27.058594 92.265625 L 87.261719 88.78125 C 90.746094 88.589844 91.136719 86.457031 91.136719 83.941406 L 91.136719 26.691406 C 91.136719 24.179688 90.167969 22.824219 88.035156 23.019531 L 25.125 26.691406 C 22.800781 26.886719 22.027344 28.046875 22.027344 30.5625 Z M 81.460938 33.652344 C 81.84375 35.398438 81.460938 37.136719 79.714844 37.332031 L 76.8125 37.910156 L 76.8125 80.460938 C 74.292969 81.816406 71.972656 82.589844 70.035156 82.589844 C 66.9375 82.589844 66.164062 81.621094 63.839844 78.722656 L 44.867188 48.9375 L 44.867188 77.753906 L 50.871094 79.109375 C 50.871094 79.109375 50.871094 82.589844 46.027344 82.589844 L 32.675781 83.363281 C 32.285156 82.589844 32.675781 80.65625 34.027344 80.269531 L 37.511719 79.304688 L 37.511719 41.199219 L 32.675781 40.8125 C 32.285156 39.070312 33.253906 36.558594 35.964844 36.363281 L 50.292969 35.398438 L 70.035156 65.570312 L 70.035156 38.878906 L 65.003906 38.300781 C 64.617188 36.171875 66.164062 34.625 68.097656 34.433594 Z M 8.28125 4.644531 L 63.453125 0.582031 C 70.230469 0 71.972656 0.390625 76.230469 3.484375 L 93.84375 15.859375 C 96.75 17.988281 97.71875 18.570312 97.71875 20.890625 L 97.71875 88.78125 C 97.71875 93.035156 96.167969 95.550781 90.75 95.9375 L 26.675781 99.804688 C 22.609375 100 20.671875 99.421875 18.542969 96.710938 L 5.574219 79.882812 C 3.25 76.785156 2.28125 74.46875 2.28125 71.757812 L 2.28125 11.410156 C 2.28125 7.933594 3.832031 5.03125 8.28125 4.644531 Z M 8.28125 4.644531 "/>
            </g>
        </svg>
    `,
};

export const addIcons = (): void => {
	Object.keys(icons).forEach((key) => {
		addIcon(key, icons[key]);
	});
};
