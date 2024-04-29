<?php

namespace App\Repositories;

use App\Models\Comment;
use App\Models\Notification;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class CommentRepository
{
    public function storeComment($request)
    {
        $comment = new Comment();
        $comment->OwnerID = Auth()->id();
        $comment->UserID = $request->UserID;
        $comment->AdID = $request->AdID;
        $comment->save();

        $lastCommentId = $comment->id;

        Notification::create([
            'user_id' => $request->UserID,
            'type' => 'info',
            'message' => 'Now you can add rating and comment.',
            'is_read' => $lastCommentId,
        ]);

        return $comment;
    }

    public function addComment($request)
    {
        $comment = Comment::findOrFail($request->CommentId);
        $comment->CommentText = $request->CommentText;
        $comment->reating = $request->reating;
        $comment->save();

        return true;
    }

    public function getComments($ownerId)
    {
        $comments = Comment::with(['users', 'ads'])
            ->where('OwnerID', $ownerId)
            ->where('reating', '!=' ,null)
            ->orderBy('created_at', 'desc')
            ->get();

        $sumComments = Comment::where('OwnerID', $ownerId)
            ->where('reating', '!=' ,null)
            ->count();

        $sumRating = Comment::where('OwnerID', $ownerId)->sum('reating');
        $averageRating = $sumRating / $sumComments;

        $formattedComments = $comments->map(function ($comment) {
            $timeAgo = Carbon::parse($comment->created_at)->diffForHumans();
            $comment->timeAgo = $timeAgo;
            return $comment;
        });

        return [
            'formattedComments' => $formattedComments,
            'sumRating' => $averageRating,
            'sumComments' => $sumComments,
        ];
    }

    public function updateComment($request, $id)
    {
        $comment = Comment::findOrFail($id);

        $comment->CommentText = $request->commentText;
        $comment->reating = $request->rating;

        $comment->save();

        return true;
    }
}
