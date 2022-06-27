<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
  
class Comment extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];
    protected $table = 'comments';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
   
    public function commentCreated()
    {
        return $this->belongsTo(Comment::class);
    }
   
    public function commentCreated1() {
        return $this->belongsToMany(CommentUser::class, 'user_comments', 'comment_id','id');
    }

    public function comments(){
        return $this->belongsToMany(Post::class,'users','user_id','id');
    }

    public function replies()
    {
        return $this->hasMany(Comment::class, 'parent_id');
    }
}