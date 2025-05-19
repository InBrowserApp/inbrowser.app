import type { SupportedLanguage } from '@/locale'
import type { Component } from 'vue'
export type { RouteRecordRaw as ToolRoute } from 'vue-router'

/**
 * Interface representing the basic metadata for a tool.
 * This interface defines the structure for tool metadata including name and description.
 *
 * @interface ToolMeta
 * @property {string} name - The display name of the tool
 * @property {string} description - A brief description of what the tool does
 */
export type ToolMeta = {
  readonly name: string
  readonly description: string
}

/**
 * Type representing internationalized metadata for a tool.
 * Maps each supported language to its corresponding tool metadata.
 *
 * @type {Record<SupportedLanguage, ToolMeta>}
 */
export type I18nToolMeta = { readonly [K in SupportedLanguage]: ToolMeta }

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
  readonly toolID: string

  /**
   * Internationalized metadata containing name and description for each supported language
   * @type {I18nToolMeta}
   */
  readonly meta: I18nToolMeta

  /**
   * Vue component to be used as the tool's icon
   * @type {Component}
   */
  readonly icon?: Component

  /**
   * Tags associated with the tool for categorization and filtering
   * @type {string[]}
   */
  readonly tags: readonly string[]

  /**
   * Features associated with the tool for feature flagging and capability detection
   * @type {string[]}
   */
  readonly features: readonly string[]

  /**
   * Path associated with the tool for routing
   * @type {string}
   */
  readonly path: string
}
