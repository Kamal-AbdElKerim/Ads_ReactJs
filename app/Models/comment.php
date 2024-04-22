<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'OwnerID',
        'UserID',
        'AdID',
        'CommentText',
        'reating',
    ];

    public function users()
    {
        return $this->belongsTo(user::class,'UserID');
    }

   
}
