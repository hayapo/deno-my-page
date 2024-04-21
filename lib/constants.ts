import { SocialsType, CareerTimelineItemType } from "../types/index.ts";

export const darkModeColor = "gray-100";
export const darkModeTextHover = "text-gray-400";
export const lightModeTextColor = "black";
export const lightModeTextHover = "text-gray-500";
export const darkModeBg = "gray-600";
export const lightModeBg = "gray-100";

export const socials: SocialsType = {
    githubId: "hayapo",
    twitterId: "_hayapo",
    mastodonId: "hayapo",
    blueskyId: "hayapo.dev",
    discordId: "546590363356364812",
    zennId: "hayapo_2501",
}


export const favouriteLanguages = [
    "TypeScript",
    "Go",
    "Rust",
    "Python"
]

export const experiensedFrameworks = [
    "React",
    "Next.js",
    "Deno"
]


export const hobbiesJa = [
    "PCゲーム",
    "アニメ見る",
    "転生系のなろう・漫画を読む"
]

export const hobbiesEn = [
    "PC game",
    "Watching anime",
    "Reading Isekai novels and manga"
]

export const careerTimelineJa: CareerTimelineItemType[] = [
    {
        id: 1,
        affiliationName: "名古屋大学",
        affiliationDetail: "情報学部人間社会情報学科",
        startedAt: new Date("2018-04-01"),
        endedAt: new Date("2022-03-31"),
    },
    {
        id: 2,
        affiliationName: "名古屋大学大学院",
        affiliationDetail: "情報学研究科 心理認知科学専攻",
        startedAt: new Date("2022-04-01"),
        endedAt: new Date("2024-03-31"),
    },
    {
        id: 3,
        affiliationName: "株式会社ドワンゴ",
        affiliationDetail: "Frontend Engineer",
        startedAt: new Date("2024-04-01"),
    }
]