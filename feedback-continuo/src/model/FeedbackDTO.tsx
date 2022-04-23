export interface FeedbackDTO {
  feedbackUserId: string;
  isAnonymous: boolean;
  message: string;
  tags: [string];
}