<?php

namespace App\Http\Controllers;

use App\Models\comment;
use Illuminate\Http\Request;

class commentController extends Controller
{
    public function storeComment(Request $request){

        $comment = new comment();
        $comment->OwnerID = Auth()->id();
        $comment->UserID = $request->UserID;
        $comment->AdID = $request->AdID;
        $comment->save();
        
        return response()->json($comment);

    }
}
