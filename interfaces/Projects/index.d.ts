export interface ProjectType {
  id: number;
  title: ProjectTitleType;
  subTitle: string;
  link: string;
  duration: string;
  iconImage: string;
  tech: Array<TechType>;
  detail: ProjectDetailType;
}

export interface ProjectTitleType {
  kr: string;
  en: string;
}

export interface ProjectDetailType {
  id: number;
  content: string;
}

export interface TechType {
  id: number;
  name: string;
}
