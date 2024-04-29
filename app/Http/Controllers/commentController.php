<?php

namespace App\Http\Controllers;

use App\Repositories\CommentRepository;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    protected $commentRepository;

    public function __construct(CommentRepository $commentRepository)
    {
        $this->commentRepository = $commentRepository;
    }

    public function storeComment(Request $request)
    {
        return $this->commentRepository->storeComment($request);
    }

    public function addComment(Request $request)
    {
        return $this->commentRepository->addComment($request);
    }

    public function getComment($ownerId)
    {
        return $this->commentRepository->getComments($ownerId);
    }

    public function update(Request $request, $id)
    {
        return $this->commentRepository->updateComment($request, $id);
    }
}
