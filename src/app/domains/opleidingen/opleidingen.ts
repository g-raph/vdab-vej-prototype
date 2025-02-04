export interface TreeNode {
    name: string;
    checked: boolean;
    hasChildrenChecked?: boolean;
    hasAllChildrenChecked?: boolean;
    expanded: boolean;
    children?: TreeNode[];
  }

  export interface Module {
    name: string;
    leervorm: string;
    duurtijd: string;
  }

  export interface OpleidingLocatie {
    stad: string;
    adres: string;
    startdatum: string;
    wachttijd: string;
    doelgroep: string;
    leervorm: string;
    lesgever: string;
    duurtijd: string;
    intensiteit: string;
  }
  
  export interface Result {
    id: number;
    name: string;
    saved?: boolean;
    videoUrl?: string;
    watJeLeert?: string[];
    modules?: Module[];
    locaties?: OpleidingLocatie[];
    toelatingsvoorwaarden?: string[];
    beschrijving?: string;
    filterCategorie: string;
    filterSubCategorie: string;
    filterGratis: string;
    filterStartdatum: string;
    filterLesmoment: string;
    filterWaarLeerJe: string;
    filterLeervorm: string;
    filterOrganisator: string;
    filterKnelpuntberoep: string;
  }