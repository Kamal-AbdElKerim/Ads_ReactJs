<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\comment;
use App\Models\Notification;
use Illuminate\Http\Request;

class commentController extends Controller
{
    public function storeComment(Request $request){

        $comment = new comment();
        $comment->OwnerID = Auth()->id();
        $comment->UserID = $request->UserID;
        $comment->AdID = $request->AdID;
        $comment->save();

        $LastIDComment = $comment->id;

        Notification::create([
            'user_id' => $request->UserID,
            'type' => 'info',
            'message' => 'Now you can add reating and Comment.',
            'is_read' => $LastIDComment,
        ]);
        
        return response()->json($comment);

    }

     public function AddComment(Request $request){

        $comment = comment::findOrFail($request->CommentId);
        $comment->CommentText = $request->CommentText;
        $comment->reating = $request->reating;
        $comment->save();
       

        return response()->json(['message' => 'Comment add successfully'], 200);
    

     }

     public function getComment($OwnerID)
     {
         // Retrieve comments with associated user, filtered by OwnerID and ordered by created_at descending
         $comments = Comment::with(['users','ads'])
                            ->where('OwnerID', $OwnerID)
                            ->where('reating', '!=' ,null)
                            ->orderBy('created_at', 'desc')
                            ->get();


         $Sumcomments = Comment::
                           where('OwnerID', $OwnerID)
                           ->where('reating', '!=' ,null)
                         
                            ->count();


         $r = Comment::where('OwnerID', $OwnerID)->sum('reating');

         $sumRating = $r / $Sumcomments ;

     
         $formattedComments = $comments->map(function ($comment) {
             $timeAgo = Carbon::parse($comment->created_at)->diffForHumans();
     
             $comment->timeAgo = $timeAgo;
     
             return $comment;
         });
     
         // Return formatted comments as JSON response
         return response()->json([
            'formattedComments' => $formattedComments,
            'sumRating' => $sumRating,
            'Sumcomments' => $Sumcomments,
         ]);
     }

     public function update(Request $request, $id)
    {
        
        $request->validate([
            'commentText' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
        ]);

        try {
            // Find the comment by ID
            $comment = Comment::findOrFail($id);

            $comment->CommentText = $request->input('commentText');
            $comment->reating = $request->input('rating');

            // Save the updated comment
            $comment->save();

            // Optionally, return a success response
            return response()->json(['message' => 'Comment updated successfully'], 200);
        } catch (\Exception $e) {
            // Handle exceptions (e.g., not found)
            return response()->json(['message' => 'Failed to update comment'], 500);
        }
    }
}
