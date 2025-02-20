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
    beschikbareplaatsen?: string;
  }
  
  export interface Result {
    id: number;
    name: string;
    saved?: boolean;
    duurtijd?: string;
    leerbewijs?: string;
    intensiteit?: string;
    prijs?: number;
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