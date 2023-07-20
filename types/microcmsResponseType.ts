export type TestType = {
  testTitle: string;
  testBody: string;
};

export type BioType = {
  lastNameJa: string;
  firstNameJa: string;
  lastNameEn: string;
  firstNameEn: string;
  handleName: string;
  age: number;
  dateOfBirth: Date;
  languages: string[];
  nationality: string;
  currentJob: string;
  currentStatus: string;
  company: string;
  developmentDomain: string[];
  favoriteLanguage: string;
  hobby: string;
  degree: string;
  prefectureFrom: string;
  whereLiving: string;
  career: Careers[];
};

export type UniversityInfoItems = {
  fieldId: string;
  facultyOrDepartment: string;
  major: string;
};

export type UniversityInfo<T> = [] | [T];

export type Careers = {
  fieldId: string;
  isUniversity: boolean;
  isAffiliationEnded: boolean;
  affiliationName: string;
  affiliationStartedAt: Date;
  affiliationEndedAt?: Date;
  content?: string;
  universityInfo?: UniversityInfo<UniversityInfoItems>;
};
