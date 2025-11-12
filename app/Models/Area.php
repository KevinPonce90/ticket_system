<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $table = 'cat_areas';
    
    protected $primaryKey = 'id';

    protected $fillable = [
        'code',
        'name',
    ];

    public $timestamps = false;
}
