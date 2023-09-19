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

export function InputModal() {
    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        // console.log(input);
        try {
            const response = await fetch("/api/analyse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input }),
            });
            const data = await response.json();
            const sentiment = data.sentiment;
            console.log(sentiment);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setInput("")
        }
    }
    const [input, setInput] = useState("");
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Add Review</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Add a Review?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {/* Enter a review for this movie. */}
                        <Input
                            placeholder="Enter your review here"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={(e) => handleClick(e)}>Analyse</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
