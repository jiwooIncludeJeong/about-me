export interface ProjectType {
  id: number;
  title: ProjectTitleType;
  subTitle: string;
  link: string;
  duration: string;
  iconImage: string;
  tech: Array<TechType>;
  detail: ProjectDetailType;
  github?: string;
}

export interface ProjectTitleType {
  kr: string;
  en: string;
}

export interface ProjectDetailType {
  id: number;
  content: string;
  link?: string;
}

export interface TechType {
  id: number;
  name: string;
}
