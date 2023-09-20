"use client";
import { useState } from "react"
import { useReviews } from "@/state/use-reviews";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BotIcon } from "lucide-react"
import toast from "react-hot-toast";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function InputModal() {
    const { addReview } = useReviews();
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [sentiment, setSentiment] = useState("");

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch("/api/analyse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input }),
            });
            const data = await response.json();
            setSentiment(data.sentiment);
            const review = {
                input,
                sentiment: data.sentiment.toLowerCase(),
                iat: new Date(),
                up: 0,
                down: 0
            }
            addReview(review);
        }
        catch (err) {
            toast.error("Something went wrong");
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="default">Add Review</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Add a Review?</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Input
                            placeholder="Enter your review here"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </AlertDialogDescription>
                    {sentiment &&
                        <>
                            {/* @ts-ignore */}
                            <Alert variant={sentiment.toLowerCase() || "neutral"}>
                                <BotIcon className="w-4 h-4" />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                    Your Review was {
                                        {
                                            "positive": "positive 🤗",
                                            "negative": "negative 😡",
                                            "neutral": "neutral 🤔"
                                        }[sentiment.toLowerCase()] || "neutral 🤔"
                                    }
                                </AlertDescription>
                            </Alert>
                        </>
                    }
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel
                        disabled={loading}
                        onClick={() => {
                            setInput("");
                            setSentiment("");
                        }}
                    >
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={(e) => handleClick(e)}
                        disabled={loading}
                    >Analyse</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
