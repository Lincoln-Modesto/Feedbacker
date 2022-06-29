<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-regular text-brand-darkgray">Filtros</h1>

    <ul class="mt-3 list-none flex flex-col">
      <li
      v-for="filter in state.filters"
      :key="filter.label"
      :class="{ 'bg-gray-200 bg-opacity-50': filter.active }"
      @click="handleSelect(filter)"
      class="flex items-center justify-between px-4 py-1 rounded cursor-pointer">
        <div class="flex items-center">
          <span
          :class="`bg-${filter.color.bg}`"
          class="inline-block w-2 h-2 mr-2 rounded-full"/>
          {{ filter.label }}
        </div>
        <span :class="filter.active ? `text-${filter.color}` : 'text-brand-graydark'" class="font-bold">
          {{ filter.amount }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import services from '../../services'
import useStore from '../../hooks/useStore'

const LABELS = {
  all: 'Todos',
  issue: 'Problemas',
  idea: 'Ideias',
  other: 'Outros'
} as any

const COLORS = {
  all: { text: 'text-brand-info', bg: 'brand-info' },
  issue: { text: 'text-brand-danger', bg: 'brand-danger' },
  idea: { text: 'text-brand-warning', bg: 'brand-warning' },
  other: { text: 'text-brand-graydark', bg: 'brand-graydark' }
} as any

function applyFiltersStructure (summary: any) {
  return Object.keys(summary).reduce((acc: any, cur: string) => {
    const currentFilter = {
      label: LABELS[cur],
      color: COLORS[cur],
      amount: summary[cur],
      active: null as boolean | null,
      type: null as string | null
    } as any

    if (cur === 'all') {
      currentFilter.active = true
    } else {
      currentFilter.type = cur
    }

    return [...acc, currentFilter]
  }, [])
}

export default defineComponent({
  async setup (props, { emit }) {
    const store = useStore()
    const state = reactive({
      hasError: false,
      filters: [{ label: null, amount: null, active: null, color: null, type: null }]
    })

    try {
      const { data } = await services.feedbacks.getSummary()
      state.filters = applyFiltersStructure(data)
    } catch (error) {
      state.hasError = !!error
      state.filters = applyFiltersStructure({
        all: 0,
        issue: 0,
        idea: 0,
        other: 0
      })
    }

    function handleSelect ({ type }: any): void {
      if (store.Global.isLoading) {
        return
      }

      state.filters = state.filters.map((filter) => {
        if (filter.type === type) {
          return { ...filter, active: true }
        }

        return { ...filter, active: false }
      }) as Array<any>

      emit('select', type)
    }

    return {
      state,
      handleSelect
    }
  }
})
</script>
