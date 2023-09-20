"use client"

import { ColumnDef } from "@tanstack/react-table"
import { useReviews } from "@/state/use-reviews"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export type Review = {
    input: string,
    sentiment: "positive" | "negative" | "neutral",
    iat: Date,
    up: number,
    down: number
}

export const columns: ColumnDef<Review>[] = [
    {
        accessorKey: "input",
        header: "Review",
        cell: ({ row }) => (
            <div className="line-clamp-1 ">
                {row.getValue("input") as string}
            </div>
        )
    },
    {
        accessorKey: "sentiment",
        header: "Sentiment",
        cell: ({ row }) => {
            const sentiment = row.getValue("sentiment") as "positive" | "negative" | "neutral"

            return (
                <div className="w-24 text-center">
                    {sentiment === "positive" && (
                        <span className="text-green-500">Positive 🤗</span>
                    )}
                    {sentiment === "negative" && (
                        <span className="text-red-500">Negative 😡</span>
                    )}
                    {sentiment === "neutral" && (
                        <span className="text-gray-500">Neutral 🤔</span>
                    )}
                </div>
            )
        }
    },
    {
        accessorKey: "iat",
        header: "Date",
        cell: ({ row }) => {
            const iat = row.getValue("iat") as Date
            return (
                <div>
                    {iat.toLocaleString()}
                </div>
            )
        }

    },
    {
        accessorKey: "up",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Upvotes
                <ArrowUpDown className="w-4 h-4 ml-2" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="w-16 text-center">
                {row.getValue("up") as number}
            </div>
        )
    },
    {
        accessorKey: "down",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Downvotes
                <ArrowUpDown className="w-4 h-4 ml-2" />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="w-16 text-center">
                {row.getValue("down") as number}
            </div>
        )
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { upvoteReview, downvoteReview, deleteReview } = useReviews();
            const review = row.original as Review
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-8 h-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(review.input)}> Copy Review</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => deleteReview(review.iat)}> Delete Review</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => upvoteReview(review.iat)}>Upvote</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => downvoteReview(review.iat)}>Downvote</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    },
]
