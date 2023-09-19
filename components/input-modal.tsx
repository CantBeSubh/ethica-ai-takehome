"use client";
import { useState } from "react"
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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BotIcon } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export function InputModal() {
    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        // console.log(input);
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
            console.log(data.sentiment);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [sentiment, setSentiment] = useState("");
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Add Review</Button>
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
                                <BotIcon className="h-4 w-4" />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                    Your Review was {sentiment.toLowerCase() == "positive" ? "positive 🤗" : "negative 🥲"}
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
