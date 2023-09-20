'use client'
import { Review } from '@/components/reviews/columns';
import { create } from 'zustand';

interface ReviewsStore {
    reviews: Review[];
    addReview: (review: Review) => void;
    upvoteReview: (iat: Date) => void;
    downvoteReview: (iat: Date) => void;
    deleteReview: (iat: Date) => void;
}

export const useReviews = create<ReviewsStore>((set) => ({
    reviews: [],
    addReview: (review) =>
        set((state) => ({
            reviews: [...state.reviews, review],
        })),
    upvoteReview: (iat) =>
        set((state) => ({
            reviews: state.reviews.map((review) =>
                review.iat === iat
                    ? {
                        ...review,
                        up: review.up + 1,
                    }
                    : review
            ),
        })),
    downvoteReview: (iat) =>
        set((state) => ({
            reviews: state.reviews.map((review) =>
                review.iat === iat
                    ? {
                        ...review,
                        down: review.down + 1,
                    }
                    : review
            ),
        })),
    deleteReview: (iat) =>
        set((state) => ({
            reviews: state.reviews.filter((review) => review.iat !== iat),
        })),
}));
