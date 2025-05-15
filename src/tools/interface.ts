import type { SupportedLanguage } from '@/locale'
import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

/**
 * Interface representing information about a tool in the application.
 * This interface defines the structure for tool metadata, including internationalized
 * names and descriptions, icon components, routing configuration, and feature flags.
 *
 * @interface ToolInfo
 * @property {Record<SupportedLanguage, {name: string, description: string}>} meta - Internationalized metadata for the tool
 * @property {Component} [icon] - Optional Vue component to be used as the tool's icon
 * @property {RouteRecordRaw[]} routes - Vue Router routes associated with this tool
 * @property {string[]} tags - Tags associated with the tool for categorization
 * @property {string[]} features - Features associated with the tool for feature flagging
 */
export interface ToolInfo {
  toolID: string

  /**
   * Internationalized metadata containing name and description for each supported language
   * @type {Record<SupportedLanguage, {name: string, description: string}>}
   */
  meta: Record<
    SupportedLanguage,
    {
      name: string
      description: string
    }
  >

  /**
   * Vue component to be used as the tool's icon
   * @type {Component}
   */
  icon?: Component

  /**
   * Vue Router routes associated with this tool
   * @type {RouteRecordRaw[]}
   */
  routes: RouteRecordRaw[]

  /**
   * Tags associated with the tool for categorization and filtering
   * @type {string[]}
   */
  tags: string[]

  /**
   * Features associated with the tool for feature flagging and capability detection
   * @type {string[]}
   */
  features: string[]
}
