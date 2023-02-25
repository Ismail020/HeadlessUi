<script setup>
import { ref } from "vue";

import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import { PencilIcon } from "@heroicons/vue/24/outline";
import { DocumentDuplicateIcon } from "@heroicons/vue/24/outline";
import { ArchiveBoxIcon } from "@heroicons/vue/24/outline";
import { XCircleIcon } from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { CheckCircleIcon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);

function closeModal() {
    isOpen.value = false;
}

function openModal() {
    isOpen.value = true;
}

const plan = ref("startup");
const gameSelection = ref("new game");
</script>

<template>
    <div class="min-h-screen bg-gray-200 text-gray-900">
        <div class="container mx-auto px-4">
            <h2 class="font-bold text-xl pt-2">Menu (Dropdown)</h2>
            <div class="mt-4">
                <Menu>
                    <MenuButton class="flex items-center bg-blue-500 text-white rounded-md px-4 py-2">
                        <span>More</span>
                        <ChevronDownIcon class="w-5 h-5 ml-2" />
                    </MenuButton>
                    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0">
                        <MenuItems class="absolute bg-white shadow-md rounded-lg flex flex-col focus:outline-none w-56 divide-y divide-gray-100 mt-2 origin-top-left">
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button class="flex w-full items-center rounded-md px-2 py-2" :class="{ 'bg-blue-500 text-white': active }">
                            <PencilIcon class="w-4 h-4 ml-2" />
                            <span class="ml-2">Edit</span>
                          </button>
                                </MenuItem>
    
                                <MenuItem v-slot="{ active }">
                                <button class="flex w-full items-center rounded-md px-2 py-2" :class="{ 'bg-blue-500 text-white': active }">
                            <DocumentDuplicateIcon class="w-4 h-4 ml-2" />
                            <span class="ml-2">Duplicate</span>
                          </button>
                                </MenuItem>
                            </div>
    
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button class="flex w-full items-center rounded-md px-2 py-2" :class="{ 'bg-blue-500 text-white': active }">
                            <ArchiveBoxIcon class="w-4 h-4 ml-2" />
                            <span class="ml-2">Archive</span>
                          </button>
                                </MenuItem>
    
                                <MenuItem v-slot="{ active }">
                                <button class="flex w-full items-center rounded-md px-2 py-2" :class="{ 'bg-blue-500 text-white': active }">
                            <XCircleIcon class="w-4 h-4 ml-2" />
                            <span class="ml-2">Delete</span>
                          </button>
                                </MenuItem>
                            </div>
    
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active, disabled }" disabled>
                                <button class="flex w-full items-center rounded-md px-2 py-2" :class="{
                              'bg-blue-500 text-white': active,
                              'opacity-50 cursor-not-allowed': disabled,
                            }">
                            <XCircleIcon class="w-4 h-4 ml-2" />
                            <span class="ml-2">Destroy</span>
                          </button>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
    
                <div class="mt-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
            </div>
            <div class="mt-4">
                <h2 class="font-bold text-xl pt-2">Dialog (Modal)</h2>
                <div class="mt-4">
                    <button type="button" @click="openModal" class="flex items-center bg-blue-500 text-white rounded-md px-4 py-2">
                    Open Modal
                  </button>
                    <TransitionRoot appear :show="isOpen" as="template">
                        <Dialog as="div" @close="closeModal" class="relative z-10">
                            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </TransitionChild>
    
                            <div class="fixed inset-0 overflow-y-auto">
                                <div class="flex min-h-full items-center justify-center p-4 text-center">
                                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                                        <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <button class="absolute top-3 right-3" @click="closeModal">
                                <XMarkIcon class="w-5 h-5" />
                              </button>
                                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                                Payment successful
                                            </DialogTitle>
                                            <div class="mt-2">
                                                <p class="text-sm text-gray-500">
                                                    Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
                                                </p>
                                            </div>
    
                                            <div class="mt-4">
                                                <button type="button" class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    @click="closeModal">
                                  Got it, thanks!
                                </button>
                                            </div>
                                        </DialogPanel>
                                    </TransitionChild>
                                </div>
                            </div>
                        </Dialog>
                    </TransitionRoot>
                </div>
            </div>
            <div class="mt-4">
                <h2 class="font-bold text-xl pt-2">Radio Group</h2>
                <RadioGroup v-model="plan" class="max-w-md mt-8">
                    <RadioGroupLabel class="font-bold">Plan</RadioGroupLabel>
                    <div class="space-y-4 mt-4">
                        <RadioGroupOption v-slot="{ checked }" value="startup" class="bg-white rounded-md shadow">
                            <div class="flex items-center justify-between rounded-md px-4 py-4" :class="checked ? 'bg-blue-500 text-white' : ''">
                                <div>
                                    <div class="font-bold">Startup</div>
                                    <div class="text-sm">12GB/6 CPUs · 160 GB SSD disk</div>
                                </div>
                                <div v-show="checked">
                                    <CheckCircleIcon class="w-5 h-5" />
                                </div>
                            </div>
                        </RadioGroupOption>
                        <RadioGroupOption v-slot="{ checked }" value="business" class="bg-white rounded-md shadow">
                            <div class="flex items-center justify-between rounded-md px-4 py-4" :class="checked ? 'bg-blue-500 text-white' : ''">
                                <div>
                                    <div class="font-bold">Business</div>
                                    <div class="text-sm">16GB/8 CPUs · 512 GB SSD disk</div>
                                </div>
                                <div v-show="checked">
                                    <CheckCircleIcon class="w-5 h-5" />
                                </div>
                            </div>
                        </RadioGroupOption>
                        <RadioGroupOption v-slot="{ checked }" value="enterprise" class="bg-white rounded-md shadow">
                            <div class="flex items-center justify-between rounded-md px-4 py-4" :class="checked ? 'bg-blue-500 text-white' : ''">
                                <div>
                                    <div class="font-bold">Enterprise</div>
                                    <div class="text-sm">32GB/12 CPUs · 1024 GB SSD disk</div>
                                </div>
                                <div v-show="checked">
                                    <CheckCircleIcon class="w-5 h-5" />
                                </div>
                            </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>
            </div>
    
            <div class="mt-4">
                <h2 class="font-bold text-xl pt-2">Alternate Radio Group</h2>
                <RadioGroup v-model="gameSelection" class="font-retro max-w-md mt-8">
                    <RadioGroupLabel class="font-bold">Video Game Menu</RadioGroupLabel>
                    <div class="space-y-4 mt-4">
                        <RadioGroupOption v-slot="{ checked }" value="new game" class="text-center focus:outline-none cursor-pointer">
                            <div class="border border-transparent px-4 py-4" :class="checked ? 'border-gray-500' : ''">
                                <div>New Game</div>
                            </div>
                        </RadioGroupOption>
                        <RadioGroupOption v-slot="{ checked }" value="load game" class="text-center focus:outline-none cursor-pointer">
                            <div class="border border-transparent px-4 py-4" :class="checked ? 'border-gray-500' : ''">
                                <div>
                                    <div class="font-bold">Load Game</div>
                                </div>
                            </div>
                        </RadioGroupOption>
                        <RadioGroupOption v-slot="{ checked }" value="settings" class="text-center focus:outline-none cursor-pointer">
                            <div class="border border-transparent px-4 py-4" :class="checked ? 'border-gray-500' : ''">
                                <div>
                                    <div class="font-bold">Settings</div>
                                </div>
                            </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>
            </div>
    
            <div class="py-8">
                <h2 class="font-bold text-xl pt-2">Tabs</h2>
                <TabGroup>
                    <TabList class="bg-blue-500 rounded-md flex justify-between px-2 py-2">
                        <Tab as="template" v-slot="{ selected }"><button class="rounded-md text-white px-4 py-2" :class="{
                          'bg-white text-gray-900 !important': selected,
                        }">
                        Tab 1
                      </button>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }"><button class="rounded-md text-white px-4 py-2" :class="{
                          'bg-white text-gray-900': selected,
                        }">
                        Tab 2
                      </button>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }"><button class="rounded-md text-white px-4 py-2" :class="{
                          'bg-white text-gray-900': selected,
                        }">
                        Tab 3
                      </button>
                        </Tab>
                    </TabList>
                    <TabPanels class="bg-white rounded-md px-4 py-2 my-2">
                        <TabPanel>Content 1</TabPanel>
                        <TabPanel>Content 2</TabPanel>
                        <TabPanel>Content 3</TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
    
            <div class="py-8">
                <h2 class="font-bold text-xl pt-2">Alternate Tabs</h2>
                <TabGroup>
                    <TabList class="px-2 py-2">
                        <Tab as="template" v-slot="{ selected }"><button class="px-4 py-2" :class="{
                          'border-b-4 border-blue-500': selected,
                        }">
                        Tab 1
                      </button>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }"><button class="px-4 py-2" :class="{
                          'border-b-4 border-blue-500': selected,
                        }">
                        Tab 2
                      </button>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }"><button class="px-4 py-2" :class="{
                          'border-b-4 border-blue-500': selected,
                        }">
                        Tab 3
                      </button>
                        </Tab>
                    </TabList>
                    <TabPanels class="bg-white rounded-md px-4 py-2 my-2">
                        <TabPanel>Content 1</TabPanel>
                        <TabPanel>Content 2</TabPanel>
                        <TabPanel>Content 3</TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    </div>
</template>

<style>

</style>
