export type SocialsType = {
    githubId: string;
    twitterId: string;
    mastodonId: string;
    blueskyId: string;
    discordId: string;
    zennId: string;
};


export type CareerTimelineItemType = {
    id: number;
    affiliationName: string;
    affiliationDetail: string;
    affiliationDescription?: string;
    startedAt: Date;
    endedAt?: Date;
}