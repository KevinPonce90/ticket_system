<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Statu extends Model
{
    protected $table = 'cat_statuses';
    
    protected $primaryKey = 'id';

    protected $fillable = [
        'code',
        'name',
    ];

    public $timestamps = false;
}
