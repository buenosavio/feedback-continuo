export interface FeedbackDTO {
  feedbackUserId: string;
  isAnonymous: boolean;
  message: string;
  tags: [];
}

export interface GivedFeedbackDTO{
    createdAt: string,
    feedbackId: string,
    message: string,
    profileUserImage: string,
    tags: [],
    userName: string,
}

export interface ReceveidFeedbackDTO{
  

}