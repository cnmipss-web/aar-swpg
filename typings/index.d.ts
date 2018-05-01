import { StyledComponentClass } from 'styled-components';
import * as ReactStrap from 'reactstrap';

// graphql query strings
declare const graphql: (query: TemplateStringsArray) => void

declare interface CSSModule {
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


declare namespace Components {
    type ButtonProps = React.DetailedHTMLProps<ReactStrap.ButtonProps, HTMLButtonElement>;

    type FormProps = React.DetailedHTMLProps<ReactStrap.FormProps, HTMLFormElement>;

    type StyledForm = StyledComponentClass<FormProps, any>
    type StyledButton = StyledComponentClass<ButtonProps, any>
}

// Data model types
declare namespace DataModel {
    interface ActAspirePerformance {
        subject: ActAspireSubject
        year: number
        gradeLevels: GradeLevelActAspirePerformance[]
    }

    enum ActAspireSubject {
        math,
        english,
        reading,
        writing,
        science,
    }

    type DistrictActAspirePerformance = ActAspirePerformance;

    interface SchoolActAspirePerformance extends ActAspirePerformance {
        schoolName: string
        schoolLevel: SchoolLevel
    }

    interface ActAspireCohortTrend {
        cohortGradYear: number,
        trendRange: YearRange
        performanceResults: GradeLevelActAspirePerformance[]
    }

    interface GradeLevelActAspirePerformance {
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

    interface SBAPerformance {
        subject: SBASubject,
        year: number,
        gradeLevels: GradeLevelSBAPerformance[]
    }

    type DistrictSBAPerformance = SBAPerformance;

    interface SchoolSBAPerformance extends SBAPerformance {
        school: string
        schoolLevel: SchoolLevel
    }

    interface GradeLevelSBAPerformance {
        subject: SBASubject
        year: number
        gradeLevel: number
        advanced: number
        proficient: number
        developing: number
        beginning: number
    }

    enum SBASubject {
        NMIHistory,
        CCLHS,
        Chamorro,
        Carolinian,
    }

    interface AlternateAssessmentPerformance {
        subject: AlternateAssessmentSubject
        year: number
        gradeLevels: GradeLevelAlternateAssessment[]
    }

    interface GradeLevelAlternateAssessment {
        subject: AlternateAssessmentSubject
        year: number
        gradeLevel: number
        advanced: number
        proficient: number
        developing: number
        beginning: number
    }

    enum AlternateAssessmentSubject {
        ELA,
        Math,
        Reading,
        Writing,
        NMIHistory
    }

    interface WIDAAccessPerformance {
        year: number
        gradeLevels: GradeLevelWIDAPerformance[]
    }

    interface GradeLevelWIDAPerformance {
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

    interface WIDADomainPerformance {
        domain: string
        entering: number
        emerging: number
        developing: number
        expanding: number
        bridging: number
        reaching: number
    }

    interface NMCPlacementPerformance {
        Q3enrollment: number
        studentsTested: number
        participationRate: number,
        placements: NMCPlacement[]
    }

    interface NMCPlacement {
        students: number
        course: NMCEnglishCourse | NMCWritingCourse | NMCMathCourse
    }

    enum NMCEnglishCourse {
        ENG071,
        ENG073,
        ENG085,
        ENG095,
        ENG101
    }

    enum NMCWritingCourse {
        ENG071,
        ENG074,
        ENG085,
        ENG095,
        ENG101
    }

    enum NMCMathCourse {
        MATH087,
        MATH089,
        MATH091,
        MATH132,
        MATH161
    }

    enum SchoolLevel {
        EarlyHeadStart,
        HeadStart,
        Elementary,
        Middle,
        JrSr,
        High
    }

    type YearRange = [number, number];
}

