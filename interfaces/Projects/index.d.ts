import type { ProjectDetailTypeEnum } from '@enums/Projects/Modal';

export interface ProjectType {
  id: number;
  title: ProjectTitleType;
  subTitle: string;
  link?: string;
  androidLink?: string;
  iosLink?: string;
  duration: string;
  iconImage: string;
  tech: Array<TechType>;
  detail: Array<ProjectDetailType>;
  shortDetail: string;
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
  type: ProjectDetailTypeEnum;
}

export interface TechType {
  id: number;
  name: string;
}
