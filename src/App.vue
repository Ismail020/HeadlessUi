<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import { PencilIcon } from "@heroicons/vue/24/outline";
import { DocumentDuplicateIcon } from "@heroicons/vue/24/outline";
import { ArchiveBoxIcon } from "@heroicons/vue/24/outline";
import { XCircleIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="min-h-screen bg-gray-200 text-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="font-bold text-xl pt-2">Menu (Dropdown)</h2>
      <div class="mt-4">
        <Menu>
          <MenuButton
            class="flex items-center bg-blue-500 text-white rounded-md px-4 py-2"
          >
            <span>More</span>
            <ChevronDownIcon class="w-5 h-5 ml-2" />
          </MenuButton>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute bg-white shadow-md rounded-lg flex flex-col focus:outline-none w-56 divide-y divide-gray-100 mt-2 origin-top-left"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    class="flex w-full items-center rounded-md px-2 py-2"
                    :class="{ 'bg-blue-500 text-white': active }"
                  >
                    <PencilIcon class="w-4 h-4 ml-2" />
                    <span class="ml-2">Edit</span>
                  </button>
                </MenuItem>

                <MenuItem v-slot="{ active }">
                  <button
                    class="flex w-full items-center rounded-md px-2 py-2"
                    :class="{ 'bg-blue-500 text-white': active }"
                  >
                    <DocumentDuplicateIcon class="w-4 h-4 ml-2" />
                    <span class="ml-2">Duplicate</span>
                  </button>
                </MenuItem>
              </div>

              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    class="flex w-full items-center rounded-md px-2 py-2"
                    :class="{ 'bg-blue-500 text-white': active }"
                  >
                    <ArchiveBoxIcon class="w-4 h-4 ml-2" />
                    <span class="ml-2">Archive</span>
                  </button>
                </MenuItem>

                <MenuItem v-slot="{ active }">
                  <button
                    class="flex w-full items-center rounded-md px-2 py-2"
                    :class="{ 'bg-blue-500 text-white': active }"
                  >
                    <XCircleIcon class="w-4 h-4 ml-2" />
                    <span class="ml-2">Delete</span>
                  </button>
                </MenuItem>
              </div>

              <div class="px-1 py-1">
                <MenuItem v-slot="{ active, disabled }" disabled>
                  <button
                    class="flex w-full items-center rounded-md px-2 py-2"
                    :class="{
                      'bg-blue-500 text-white': active,
                      'opacity-50 cursor-not-allowed': disabled,
                    }"
                  >
                    <XCircleIcon class="w-4 h-4 ml-2" />
                    <span class="ml-2">Destroy</span>
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>

        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          voluptate voluptatum quia cupiditate? Saepe inventore est dolores sed
          rem aspernatur accusamus dolor libero, id voluptate suscipit
          laudantium at molestias aliquid?
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
