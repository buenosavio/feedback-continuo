export interface FeedbackDTO {
  feedbackUserId: string;
  isAnonymous: boolean;
  message: string;
  tags: [];
}

export interface FeedbacksDTO{
    createdAt: string,
    feedbackId: string,
    message: string,
    profileUserImage: string,
    tags: [''],
    userName: string,
}