<?php

namespace App\Http\Controllers;

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
}
