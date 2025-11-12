<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prioritie extends Model
{
    protected $table = 'cat_priorities';
    
    protected $primaryKey = 'id';

    protected $fillable = [
        'code',
        'name',
    ];

    public $timestamps = false;
}
