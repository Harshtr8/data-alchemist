"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Upload, Database, Settings, Download, Sparkles } from 'lucide-react'
import DataIngestion from "@/components/data-ingestion"
import DataGrid from "@/components/data-grid"
import RuleBuilder from "@/components/rule-builder"
import PrioritizationPanel from "@/components/prioritization-panel"
import ValidationSummary from "@/components/validation-summary"
import NaturalLanguageSearch from "@/components/natural-language-search"
import ExportPanel from "@/components/export-panel"
import { DataProvider } from "@/contexts/data-context"
import AIErrorCorrection from "@/components/ai-error-correction"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("ingestion")

  return (
    <DataProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />
              <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Data Alchemist
              </h1>
            </div>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Transform your messy spreadsheets into clean, validated data with AI-powered insights and intelligent rule
              creation
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
              <Badge variant="secondary" className="text-xs">
                AI-Powered
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Real-time Validation
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Natural Language
              </Badge>
            </div>
          </div>

          {/* Main Interface */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
            <TabsList className="grid w-full grid-cols-5 h-auto p-1">
              <TabsTrigger value="ingestion" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2 sm:p-3">
                <Upload className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Data Upload</span>
                <span className="sm:hidden">Upload</span>
              </TabsTrigger>
              <TabsTrigger value="data" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2 sm:p-3">
                <Database className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Data Grid</span>
                <span className="sm:hidden">Grid</span>
              </TabsTrigger>
              <TabsTrigger value="rules" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2 sm:p-3">
                <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Rules</span>
                <span className="sm:hidden">Rules</span>
              </TabsTrigger>
              <TabsTrigger
                value="priorities"
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2 sm:p-3"
              >
                <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Priorities</span>
                <span className="sm:hidden">Prior</span>
              </TabsTrigger>
              <TabsTrigger value="export" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2 sm:p-3">
                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Export</span>
                <span className="sm:hidden">Export</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ingestion" className="space-y-6">
              <DataIngestion />
            </TabsContent>

            <TabsContent value="data" className="space-y-6">
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                {/* Main Data Grid - Takes full width on mobile, 3/4 on desktop */}
                <div className="xl:col-span-3 order-2 xl:order-1">
                  <DataGrid />
                </div>

                {/* Sidebar Components - Stack vertically on mobile, sidebar on desktop */}
                <div className="xl:col-span-1 order-1 xl:order-2 space-y-4">
                  <ValidationSummary />
                  <div className="block lg:hidden">
                    {/* Mobile: Show search and AI correction in expandable sections */}
                    <div className="space-y-4">
                      <details className="group">
                        <summary className="cursor-pointer p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                          <span className="font-medium">🔍 AI Search</span>
                        </summary>
                        <div className="mt-2">
                          <NaturalLanguageSearch />
                        </div>
                      </details>

                      <details className="group">
                        <summary className="cursor-pointer p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                          <span className="font-medium">🤖 AI Error Correction</span>
                        </summary>
                        <div className="mt-2">
                          <AIErrorCorrection />
                        </div>
                      </details>
                    </div>
                  </div>

                  {/* Desktop: Show normally */}
                  <div className="hidden lg:block space-y-4">
                    <NaturalLanguageSearch />
                    <AIErrorCorrection />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rules" className="space-y-6">
              <RuleBuilder />
            </TabsContent>

            <TabsContent value="priorities" className="space-y-6">
              <PrioritizationPanel />
            </TabsContent>

            <TabsContent value="export" className="space-y-6">
              <ExportPanel />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DataProvider>
  )
}
