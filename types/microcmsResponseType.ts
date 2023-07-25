export type TestType = {
  testTitle: string;
  testBody: string;
};

export type BioType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  lastNameJa: string;
  firstNameJa: string;
  lastNameEn: string;
  firstNameEn: string;
  handleName: string;
  age: number;
  dateOfBirth: string;
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
  socials: Socials;
  career: Careers[];
};

export type Socials = {
  fieldId: string;
  github: string;
  twitter: string;
  mastodon: string;
  discord: string;
  zenn: string;
};

export type UniversityInfoItems = {
  fieldId: string;
  facultyOrDepartment: string;
  major: string;
};

export type UniversityInfo<T> = [T];

export type Careers = {
  fieldId: string;
  isUniversity: boolean;
  isAffiliationEnded: boolean;
  affiliationName: string;
  affiliationStartedAt: string;
  affiliationEndedAt?: string;
  content?: string;
  universityInfo?: UniversityInfo<UniversityInfoItems>;
};
