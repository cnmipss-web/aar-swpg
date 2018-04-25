// graphql query strings
declare const graphql: (query: TemplateStringsArray) => void

interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

// Data model types

declare interface ActAspirePerformance {
    subject: ActAspireSubject
    year: number
    gradeLevels: GradeLevelActAspirePerformance[]
}

declare enum ActAspireSubject {
    math,
    english,
    reading,
    writing,
    science,
}

declare type DistrictActAspirePerformance = ActAspirePerformance;

declare interface SchoolActAspirePerformance extends ActAspirePerformance {
    schoolName: string
    schoolLevel: SchoolLevel
}

declare interface ActAspireCohortTrend {
    cohortGradYear: number,
    trendRange: YearRange
    performanceResults: GradeLevelActAspirePerformance[]
}

declare interface GradeLevelActAspirePerformance {
    subject: string
    year: number
    gradeLevel: number
    exceeding: number
    ready: number
    close: number
    needSupport: number
    studentsTested: number
    totalEnrollment: number
    participationRate: number
}

declare interface SBAPerformance {
    subject: SBASubject,
    year: number,
    gradeLevels: GradeLevelSBAPerformance[]
}

declare type DistrictSBAPerformance = SBAPerformance;

declare interface SchoolSBAPerformance extends SBAPerformance {
    school: string
    schoolLevel: SchoolLevel
}

declare interface GradeLevelSBAPerformance {
    subject: SBASubject
    year: number
    gradeLevel: number
    advanced: number
    proficient: number
    developing: number
    beginning: number
}

declare enum SBASubject {
    NMIHistory,
    CCLHS,
    Chamorro,
    Carolinian,
}

declare interface AlternateAssessmentPerformance {
    subject: AlternateAssessmentSubject
    year: number
    gradeLevels: GradeLevelAlternateAssessment[]
}

declare interface GradeLevelAlternateAssessment {
    subject: AlternateAssessmentSubject
    year: number
    gradeLevel: number
    advanced: number
    proficient: number
    developing: number
    beginning: number
}

declare enum AlternateAssessmentSubject {
    ELA,
    Math,
    Reading,
    Writing,
    NMIHistory
}

declare interface WIDAAccessPerformance {
    year: number
    gradeLevels: GradeLevelWIDAPerformance[]
}

declare interface GradeLevelWIDAPerformance {
    year: number
    gradeLevel: number
    studentCount: number
    meetExitCriteria: number
    listeningPerformance: WIDADomainPerformance
    speakingPerformance: WIDADomainPerformance
    readingPerformance: WIDADomainPerformance
    writingPerformance: WIDADomainPerformance
    overallPerformance: WIDADomainPerformance
}

declare interface WIDADomainPerformance {
    domain: string
    entering: number
    emerging: number
    developing: number
    expanding: number
    bridging: number
    reaching: number
}

declare interface NMCPlacementPerformance {
    Q3enrollment: number
    studentsTested: number
    participationRate: number,
    placements: NMCPlacement[]
}

declare interface NMCPlacement {
    students: number
    course: NMCEnglishCourse | NMCWritingCourse | NMCMathCourse
}

declare enum NMCEnglishCourse {
    ENG071,
    ENG073,
    ENG085,
    ENG095,
    ENG101
}

declare enum NMCWritingCourse {
    ENG071,
    ENG074,
    ENG085,
    ENG095,
    ENG101
}

declare enum NMCMathCourse {
    MATH087,
    MATH089,
    MATH091,
    MATH132,
    MATH161
}

declare enum SchoolLevel {
    EarlyHeadStart,
    HeadStart,
    Elementary,
    Middle,
    JrSr,
    High
}

type YearRange = [number, number];
