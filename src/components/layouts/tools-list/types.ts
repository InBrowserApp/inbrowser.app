import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface ToolItem {
  icon: Component
  title: string
  to: RouteLocationRaw
}
