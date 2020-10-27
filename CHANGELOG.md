# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0] - 2020-10-27
### Added
- weighted random pick! 🎉🎉🎉
- layout
  - Header
  - Main
  - Footer
- `HtmlContent` Component
- helper for weighted random pick
  - `getWeightedPartialSums`
  - `getWeightedRandomPick`
- more responsiveness
  - mobile menu
- styling
  - changelog
- translations

### Changed
- Linting rules
- improved styling
  - navbar
- weights for traits
- extended `Trait` with Generic
- `Route` type
- more obvious label for language switcher
- improved CHANGELOG
- routes in `routes.ts`
  - nesting

### Deprecated
- old random trait pick
  - accessible through path `/random/legacy`

## [1.2.0] - 2020-10-22
### Added
- new traits
  - blindbat
  - button
  - cleaning staff
  - conspiracy
  - curious
  - gluttony
  - janitor
  - nurse
  - oldschool
  - pride
  - sherlock

## [1.1.0] - 2020-10-21
### Added
- new traits 🎉
  - diplomacy
  - envy
  - easily shocked
  - lust
  - maintenance
  - Nope!
  - Poltergeist
  - reflection
  - true poet
  - walky-talky
  - YAS!
- `Route` type
- site / page title

### Changed
- ESLint config
- new folder structure
- reworked TranslationProvider to AppProvider
- translations has moved to a separate folder
  - `i18n.init` call has been moved to new folder
  - extracted `useTranslation` hook into new folder
  - `LanguageContext` has been moved to new folder

## [1.0.1] - 2020-10-21
### Fixed
- content of LICENSE file
- uses `fs` instead of `fs/promises`

## [1.0.0] - 2020-10-21
### Added
- Traits added with translation for English and German
  - amnesia
  - blur
  - detective
  - dystychiphobia
  - liar
  - mute
  - no colors
  - no trait
  - paranoia
  - prosopagnosia
  - sadist
  - security
  - workaholic
- ESLint for CodeLinting
- Translations and language switch
- Routes for navigation
  - /
  - /traits
  - /random
- Styling with bulma
- Icons from fontawesome
- README
- LICENSE
- CHANGELOG

### Deprecated
- Traits
  - mute
  - no colors
  - prosopagnosia
